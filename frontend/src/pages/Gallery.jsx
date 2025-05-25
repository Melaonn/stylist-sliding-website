import React, { useEffect, useRef, useState } from 'react';

const sections = [
  {
    desktopSrc: '/images/image1.png',
    mobileSrc: '/images/image1-mobile.png',
    title: 'Innovative Solutions',
    description: 'Delivering cutting-edge technology for your business growth.',
  },
  {
    desktopSrc: '/images/image2.png',
    mobileSrc: '/images/image2-mobile.png',
    title: 'Expert Team',
    description: 'Our dedicated professionals are here to support you.',
  },
  {
    desktopSrc: '/images/image3.png',
    mobileSrc: '/images/image3-mobile.png',
    title: 'Trusted Partners',
    description: 'Building long-lasting relationships with our clients.',
  },
];

export default function StickyGalleryWithParallax() {
  const sectionRefs = useRef([]);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="gallery">
      {sections.map((section, i) => {
        const ref = sectionRefs.current[i];
        const offsetTop = ref?.offsetTop || 0;
        const speedFactor = 0.3;
        const translateY = (scrollY - offsetTop) * speedFactor;

        return (
          <section
            key={i}
            ref={(el) => (sectionRefs.current[i] = el)}
            className="relative h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          >
            {/* Parallax Image */}
            <img
              src={isMobile ? section.mobileSrc : section.desktopSrc}
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                transform: `translateY(${translateY}px)`,
                transition: 'transform 0.1s linear',
              }}
            />

            {/* Parallax Text */}
            <div
              className="relative z-10 p-8 bg-black bg-opacity-50 rounded-lg text-white max-w-xl text-center"
              style={{
                transform: `translateY(${translateY * 0.6}px)`,
                transition: 'transform 0.1s linear',
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg md:text-xl">{section.description}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
