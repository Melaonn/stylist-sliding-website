import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HomeSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    }

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      speed={1000}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="mySwiper w-full h-screen"
    >
      {/* Slide 2: Image + Text */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          {/* Different images for mobile/desktop */}
          {!isMobile ? (
            <img
              src="/images/slide2.png"
              alt="Slide 2"
              className="absolute w-full h-full object-cover"
            />
          ) : (
            <img
              src="/images/slide2-mobile.png"
              alt="Slide 2 Mobile"
              className="absolute w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Innovation</h2>
              <p className="text-lg md:text-xl">We bring ideas to life with cutting-edge tech.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3: Image + Text */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          {!isMobile ? (
            <img
              src="/images/slide3.png"
              alt="Slide 3"
              className="absolute w-full h-full object-cover"
            />
          ) : (
            <img
              src="/images/slide3-mobile.png"
              alt="Slide 3 Mobile"
              className="absolute w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Success Is Our Mission</h2>
              <p className="text-lg md:text-xl">Join us in shaping the future together.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 1: Video Background */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          {!isMobile ? (
            <video
              autoPlay
              loop
              muted
              className="absolute w-full h-full object-cover"
              src="/videos/home.mp4"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              className="absolute w-full h-full object-cover"
              src="/videos/home-mobile.mp4"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
