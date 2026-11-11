import { createServerFn } from "@tanstack/react-start";
import { newsletterSubscriptionSchema, type NewsletterResult } from "./newsletter";
import { subscribeMailchimpMember } from "./newsletter.server";

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data) => newsletterSubscriptionSchema.parse(data))
  .handler(async ({ data }): Promise<NewsletterResult> => {
    try {
      const result = await subscribeMailchimpMember(data);
      if (result.state === "unsubscribed") return { ok: false, reason: "unsubscribed" };
      return { ok: true, state: result.state };
    } catch (error) {
      console.error("Newsletter subscription failed", error);
      return { ok: false, reason: "error" };
    }
  });
