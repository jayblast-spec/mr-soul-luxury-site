import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-06-26",
  useCdn: true,
};

let client: ReturnType<typeof createClient> | null = null;

export function getSanityClient() {
  if (!client) {
    client = createClient(config);
  }

  return client;
}

export const menuItemsQuery = `*[_type == "menuItem"] | order(category asc, name asc) {
  name,
  description,
  price,
  category,
  "imageUrl": image.asset->url,
  isPopular,
  isSpicy
}`;

export const faqQuery = `*[_type == "faq"] | order(_createdAt asc) {
  question,
  answer
}`;

export const heroQuery = `*[_type == "hero"][0] {
  title,
  subtitle,
  ctaText,
  ctaLink,
  "backgroundImageUrl": backgroundImage.asset->url
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  name,
  text,
  rating,
  "avatarUrl": avatar.asset->url
}`;
