import GalleryPage from "./GalleryPage";

export const metadata = {
  title:
    "Atithi Homestay Guwahati — Photo Gallery of Rooms & Facilities",
  description:
    "Browse photos of Atithi Homestay Guwahati — see our comfortable rooms, modern amenities and warm hospitality. Get a real feel of our accommodation before you book.",
  keywords:
    "Atithi Homestay Guwahati gallery, Atithi Homestay photos, Guwahati homestay images, hotel gallery Assam, guest house photos Guwahati, accommodation gallery Atithi, hotel rooms images Guwahati",

  // Canonical (optional but best for SEO)
  alternates: {
    canonical: "https://www.atithihome.com/",
  },

  // ⭐ Short OG image (recommended)
  openGraph: {
    images: "/assets/gallery/g1.jpg",
  },

  // ⭐ Twitter large image card
  twitter: {
    card: "summary_large_image",
    images: "/assets/gallery/g1.jpg",
  },
};

export default function Page() {
  return <GalleryPage />;
}
