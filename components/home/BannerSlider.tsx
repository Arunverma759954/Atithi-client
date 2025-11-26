"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  return (
    <div className="relative w-full h-screen bg-white">

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/assets/banner/b1.jpg"
              alt="Hotel Banner 1"
              fill
              priority
              className="object-cover z-0"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/assets/banner/b2.webp"
              alt="Hotel Banner 2"
              fill
              className="object-cover z-0"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* BOOKING OVERLAY BOX */}
<div className="absolute inset-0 flex items-center justify-center px-4 z-20 translate-y-24">
  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-4xl">


          <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
            Book Your Stay
          </h2>

          {/* GRID FORM */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Check In */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Check In</label>
              <input
                type="date"
                className="mt-2 p-3 rounded-lg bg-white/90 text-black focus:outline-none"
              />
            </div>

            {/* Check Out */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Check Out</label>
              <input
                type="date"
                className="mt-2 p-3 rounded-lg bg-white/90 text-black focus:outline-none"
              />
            </div>

            {/* Rooms */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Rooms</label>
              <select className="mt-2 p-3 rounded-lg bg-white/90 text-black focus:outline-none">
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
                <option>4 Rooms</option>
              </select>
            </div>

            {/* Guests */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Guests</label>
              <select className="mt-2 p-3 rounded-lg bg-white/90 text-black focus:outline-none">
                <option>1 Adult, 0 Child</option>
                <option>2 Adults, 0 Child</option>
                <option>2 Adults, 1 Child</option>
                <option>2 Adults, 2 Children</option>
              </select>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-6 flex justify-center">
            <button className="bg-[#FACC15] hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg transition">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
