import React, { useEffect, useRef, useState } from 'react';

const sections = [
  {
    src: '/images/image1.png',
    title: 'Innovative Solutions',
    description: 'Delivering cutting-edge technology for your business growth.',
  },
  {
    src: '/images/image2.png',
    title: 'Expert Team',
    description: 'Our dedicated professionals are here to support you.',
  },
  {
    src: '/images/image3.png',
    title: 'Trusted Partners',
    description: 'Building long-lasting relationships with our clients.',
  },
];

export default function StickyGalleryWithFade() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% of the section visible triggers visibility
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisibleIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div id="gallery">
      {sections.map((section, i) => (
        <section
          key={i}
          data-index={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="relative h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          style={{
            transition: 'opacity 0.8s ease',
            opacity: visibleIndex === i ? 1 : 0,
            pointerEvents: visibleIndex === i ? 'auto' : 'none', // prevent interaction with invisible sections
          }}
        >
          <img
            src={section.src}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 p-8 bg-black bg-opacity-50 rounded-lg text-white max-w-xl text-center">
            <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg">{section.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
