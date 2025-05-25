import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';

export default function HomeSlider() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const navRef = useRef(null);
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slideTitles = ['Intro', 'Innovation', 'Mission'];

  useEffect(() => {
    if (!navRef.current) return;
    const buttons = navRef.current.querySelectorAll('button');
    if (buttons.length === 0) return;
    const activeBtn = buttons[activeIndex];
    if (!activeBtn) return;

    const { offsetLeft, offsetWidth } = activeBtn;

    setLineStyle({
      width: offsetWidth,
      left: offsetLeft,
    });
  }, [activeIndex, isMobile]);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      
      <Swiper
        modules={[Autoplay, Parallax]}
        speed={1000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        parallax={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {/* Slide 1: Image + Text */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={isMobile ? '/images/slide1-mobile.png' : '/images/slide1.png'}
              alt="Slide 1"
              className="absolute w-full h-full object-cover"
            />
            {/* Text positioned left top */}
            <div className="absolute left-1 top-1/8 -translate-y-0 max-w-xs md:max-w-md px-4 text-white">
              <h2 data-swiper-parallax="-300" className="text-3xl md:text-6xl font-bold mb-2 font-randi">
                Welcome to Our Innovation
              </h2>
                <p data-swiper-parallax="-100" className="pt-4 text-md md:text-lg font-chakka">
                  We bring ideas to life with cutting-edge tech.
                </p>

            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Image + Text */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={isMobile ? '/images/slide2-mobile.png' : '/images/slide2.png'}
              alt="Slide 2"
              className="absolute w-full h-full object-cover"
            />
            {/* Text positioned left top */}
            <div className="absolute left-1 top-1/8 -translate-y-0 max-w-xs md:max-w-md px-4 text-black">
              <h2 data-swiper-parallax="-300" className="text-3xl md:text-6xl font-bold mb-2 font-randi">
                Your Success Is Our Mission
              </h2>
              <p data-swiper-parallax="-100" className="pt-4 text-md md:text-lg font-chakka">
                Join us in shaping the future together.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Video */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
              src={isMobile ? '/videos/home-mobile.mp4' : '/videos/home.mp4'}
            />
            {/* Text positioned left top */}
            <div className="absolute left-1 top-1/8 -translate-y-0 px-4 text-black">
              <h2 data-swiper-parallax="-300" className="text-3xl md:text-6xl font-bold font-randi">
                Dive into Innovation
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Text with Line Indicator */}
      <div className="absolute bottom-5 left-5 z-10">
        <div ref={navRef} className="relative flex gap-6">
          {slideTitles.map((title, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`text-white text-sm md:text-base font-medium transition duration-300 ${
                activeIndex === index ? 'text-cyan-400' : 'opacity-70'
              }`}
            >
              {title}
            </button>
          ))}
          {/* Line indicator */}
          <div
            className="absolute bottom-[-4px] h-[2px] bg-cyan-400 transition-all duration-500"
            style={{
              width: lineStyle.width,
              left: lineStyle.left,
            }}
          />
        </div>
      </div>
    </div>
  );
}
