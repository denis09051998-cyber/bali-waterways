import { describe, expect, it } from "vitest";
import { newsletterSubscriptionSchema } from "./newsletter";

describe("newsletter subscription validation", () => {
  it("requires explicit consent", () => {
    expect(newsletterSubscriptionSchema.safeParse({
      email: " swimmer@example.com ",
      source: "homepage",
      language: "en",
      consent: false,
    }).success).toBe(false);
  });

  it("normalizes a valid email and records homepage source and language", () => {
    const result = newsletterSubscriptionSchema.parse({
      email: " Swimmer@Example.com ",
      source: "homepage",
      language: "ru",
      consent: true,
    });
    expect(result.email).toBe("swimmer@example.com");
    expect(result.source).toBe("homepage");
    expect(result.language).toBe("ru");
  });

  it("accepts the contacts source with Indonesian language", () => {
    const result = newsletterSubscriptionSchema.parse({
      email: "swimmer@example.com",
      source: "contacts",
      language: "id",
      consent: true,
    });
    expect(result.source).toBe("contacts");
    expect(result.language).toBe("id");
  });
});
