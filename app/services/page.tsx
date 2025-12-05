import ServiceSection from "./ServiceSection";

export const metadata = {
  title:
    "Atithi Homestay Guwahati — Our Services & Amenities",
  description:
    "Discover the services at Atithi Homestay Guwahati: comfortable rooms, modern amenities, 24/7 support, airport transfers, tour assistance and personalized hospitality to make your stay seamless and relaxing.",
  keywords:
    "Atithi Homestay Guwahati services, homestay amenities Guwahati, hotel services Assam, Guwahati accommodation amenities, guest house services Guwahati, homestay airport transfer, homestay tour assistance, luxury stay services Guwahati",

  // Canonical URL (Optional but recommended)
  alternates: {
    canonical: "https://www.atithihome.com/",
  },

  // ⭐ Short OG image tag
  openGraph: {
    images: "/assets/gallery/s1.jpg", // Place in public folder or use full URL
  },

  // ⭐ Twitter large card
  twitter: {
    card: "summary_large_image",
    images: "/assets/gallery/s1.jpg",
  },
};

export default function Page() {
  return <ServiceSection />;
}
