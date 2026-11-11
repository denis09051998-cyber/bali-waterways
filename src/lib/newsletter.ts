import { z } from "zod";

export const newsletterSubscriptionSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email address").max(254, "Email must be less than 254 characters"),
  source: z.enum(["homepage", "contacts"]),
  language: z.enum(["en", "ru", "id"]),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required" }) }),
});

export type NewsletterSubscriptionInput = z.infer<typeof newsletterSubscriptionSchema>;

export type NewsletterResult =
  | { ok: true; state: "subscribed" | "already_subscribed" | "pending" }
  | { ok: false; reason: "unsubscribed" | "error" };
