import BannerSlider from "@/components/home/BannerSlider";
import Intro from "@/components/home/Intro";
import HotelFacilities from "@/components/home/HotelFacilities";
import LuxuryIntroSection from "@/components/home/LuxuryIntroSection";
import RoomsGridSection from "@/components/home/RoomsGridSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogSection from "@/components/home/BlogSection";



export default function Home() {
  return (
    <>
      <BannerSlider />
      <Intro />
      <HotelFacilities />
      <LuxuryIntroSection />
      <RoomsGridSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
