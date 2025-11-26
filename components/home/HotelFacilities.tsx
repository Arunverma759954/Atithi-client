"use client";

import { 
  FaWifi, 
  FaUtensils, 
  FaSwimmingPool, 
  FaConciergeBell, 
  FaKey, 
  FaBed 
} from "react-icons/fa";

export default function FacilitiesSection3() {
  const facilities = [
    { title: "Room Services", icon: FaBed },
    { title: "Wi-Fi Internet", icon: FaWifi },
    { title: "Smart Key", icon: FaKey },
    { title: "Breakfast", icon: FaUtensils },
    { title: "Swimming Pool", icon: FaSwimmingPool },
    { title: "24x7 Service", icon: FaConciergeBell },
  ];

  return (
    <section className="relative py-20">

      {/* BACKGROUND IMAGE WITHOUT BLUR */}
      <div className="absolute inset-0">
        <img
          src="/assets/banner/b3.jpg"
          alt="Facilities Background"
          className="w-full h-full object-cover"
        />
        
        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Heading */}
        <div className="md:text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#D6B68C] tracking-widest font-semibold">
            HOTEL’S FACILITIES
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 drop-shadow-lg">
            Exceptional Facilities for Your Stay
          </h2>

          <p className="mt-4 text-gray-200 drop-shadow-md">
            We provide world-class amenities ensuring comfort, luxury and a memorable experience.
          </p>
        </div>

        {/* Facilities Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {facilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 
                shadow-lg hover:shadow-2xl border border-white/20 
                transition-all"
              >
                {/* ICON */}
                <div className="w-20 h-20 mx-auto flex items-center justify-center 
                rounded-full bg-white/30 group-hover:bg-[#8B5E34] 
                transition-all duration-300">
                  <Icon className="text-4xl text-white group-hover:text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-center text-lg font-semibold text-white mt-4">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

        {/* Manager Signature */}
        <div className="text-center mt-16">
          <h4 className="text-xl font-semibold text-[#FACC15] tracking-widest">
            MANAGER
          </h4>
          <p className="text-gray-200 mt-1">LUXURY BEST HOTEL IN CITY</p>
        </div>

      </div>
    </section>
  );
}
