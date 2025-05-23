// src/components/HomeSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';





export default function HomeSlider() {
  return (
    <Swiper
    modules={[Autoplay, Pagination, EffectFade]} // include EffectFade if you want fade
    effect="fade"                               // or omit if you want normal slide
    speed={1000}                               // transition takes 1 second (slow-mo)
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    className="mySwiper w-full h-screen"
    >
      {/* Slide 1: Video Background */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
            src="/videos/home.mp4"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button className="bg-white text-black px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gray-200 transition">
              Explore
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2: Image + Text */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="/images/slide2.png"
            alt="Slide 2"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
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
          <img
            src="/images/slide3.png"
            alt="Slide 3"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Success Is Our Mission</h2>
              <p className="text-lg md:text-xl">Join us in shaping the future together.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
