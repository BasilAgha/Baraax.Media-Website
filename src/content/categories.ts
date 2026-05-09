export const categories = [
  {
    slug: "events-corporate",
    index: "01",
    title: "Events & Corporate",
    description: "Launches, conferences, executive films, and brand moments with quiet authority.",
    intro:
      "For conferences, corporate launches, executive announcements, and private events where every frame should feel composed, credible, and premium.",
    imageClass: "image-events",
  },
  {
    slug: "hospitality",
    index: "02",
    title: "Hospitality",
    description: "Hotels, venues, and destinations shaped through atmosphere, space, and detail.",
    intro:
      "For hotels, restaurants, lounges, resorts, and destination brands that need their space to feel desirable before the guest arrives.",
    imageClass: "image-hospitality",
  },
  {
    slug: "food-beverage",
    index: "03",
    title: "Food & Beverage",
    description: "Menus, restaurants, and product stories with craft, texture, and restraint.",
    intro:
      "For restaurants, cafes, chefs, and beverage brands that need cinematic appetite appeal without loud or cluttered visuals.",
    imageClass: "image-food",
  },
  {
    slug: "lifestyle-sports",
    index: "04",
    title: "Lifestyle & Sports",
    description: "Movement-led visuals for people, performance, wellness, and lifestyle brands.",
    intro:
      "For lifestyle, fitness, athlete, wellness, and sports brands where identity, motion, and discipline carry the story.",
    imageClass: "image-lifestyle",
  },
];

export const works = [
  {
    categorySlug: "events-corporate",
    title: "Opening Sequence",
    type: "Events & Corporate",
    year: "2026",
    imageClass: "image-events",
  },
  {
    categorySlug: "events-corporate",
    title: "Executive Forum",
    type: "Corporate Film",
    year: "2026",
    imageClass: "image-events",
  },
  {
    categorySlug: "events-corporate",
    title: "Brand Launch Film",
    type: "Event Campaign",
    year: "2025",
    imageClass: "image-events",
  },
  {
    categorySlug: "hospitality",
    title: "Evening Service",
    type: "Hospitality",
    year: "2026",
    imageClass: "image-hospitality",
  },
  {
    categorySlug: "hospitality",
    title: "Suite Atmosphere",
    type: "Hotel Film",
    year: "2025",
    imageClass: "image-hospitality",
  },
  {
    categorySlug: "hospitality",
    title: "Destination Still Life",
    type: "Venue Campaign",
    year: "2025",
    imageClass: "image-hospitality",
  },
  {
    categorySlug: "food-beverage",
    title: "Taste Study",
    type: "Food & Beverage",
    year: "2025",
    imageClass: "image-food",
  },
  {
    categorySlug: "food-beverage",
    title: "Fire and Table",
    type: "Restaurant Film",
    year: "2026",
    imageClass: "image-food",
  },
  {
    categorySlug: "food-beverage",
    title: "Origin Pour",
    type: "Beverage Campaign",
    year: "2025",
    imageClass: "image-food",
  },
  {
    categorySlug: "lifestyle-sports",
    title: "Motion Portraits",
    type: "Lifestyle & Sports",
    year: "2025",
    imageClass: "image-lifestyle",
  },
  {
    categorySlug: "lifestyle-sports",
    title: "Training Ground",
    type: "Sports Campaign",
    year: "2026",
    imageClass: "image-lifestyle",
  },
  {
    categorySlug: "lifestyle-sports",
    title: "After the Sprint",
    type: "Athlete Story",
    year: "2025",
    imageClass: "image-lifestyle",
  },
];

export type Category = (typeof categories)[number];
