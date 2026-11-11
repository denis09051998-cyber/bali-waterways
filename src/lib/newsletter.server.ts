import { createHash } from "node:crypto";
import type { NewsletterSubscriptionInput } from "./newsletter";

const AUDIENCE_ID = "06ad67b558";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/mailchimp_marketing";

type MailchimpMember = {
  status?: "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional";
};

async function mailchimpRequest<T>(
  path: string,
  init: RequestInit = {},
  allowNotFound = false,
): Promise<T | null> {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const connectionApiKey = process.env["MAILCHIMP_MARKETING_API_KEY"];
  if (!lovableApiKey || !connectionApiKey) {
    throw new Error("Mailchimp is not connected to this project");
  }

  const response = await fetch(`${GATEWAY_URL}/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${lovableApiKey}`,
      "X-Connection-Api-Key": connectionApiKey,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  if (allowNotFound && response.status === 404) return null;
  if (!response.ok) {
    const problem = await response.text();
    console.error(`Mailchimp subscription request failed [${response.status}]: ${problem}`);
    throw new Error(`Mailchimp request failed with status ${response.status}`);
  }
  if (response.status === 204) return null;
  return (await response.json()) as T;
}

function subscriberHash(email: string) {
  return createHash("md5").update(email).digest("hex");
}

export async function subscribeMailchimpMember(input: NewsletterSubscriptionInput) {
  const hash = subscriberHash(input.email);
  const memberPath = `lists/${AUDIENCE_ID}/members/${hash}`;
  const existing = await mailchimpRequest<MailchimpMember>(memberPath, {}, true);

  if (existing?.status === "unsubscribed" || existing?.status === "cleaned") {
    return { state: "unsubscribed" as const };
  }

  const sourceLabel = input.source === "homepage" ? "Homepage" : "Contacts";
  const updated = await mailchimpRequest<MailchimpMember>(memberPath, {
    method: "PUT",
    body: JSON.stringify({
      email_address: input.email,
      status_if_new: "subscribed",
      tags: [`Source: ${sourceLabel}`, `Language: ${input.language}`],
    }),
  });

  if (updated?.status === "pending" || existing?.status === "pending") {
    return { state: "pending" as const };
  }
  if (updated?.status !== "subscribed") {
    throw new Error("Mailchimp did not confirm the subscription");
  }
  return { state: existing?.status === "subscribed" ? ("already_subscribed" as const) : ("subscribed" as const) };
}
