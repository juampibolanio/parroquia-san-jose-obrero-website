"use client";

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function BottomGallery() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true }, 
    [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const photos = [
    "/sjo2.webp",
    "/sjo3.webp",
    "/sjo4.webp",
    "/sjo5.webp",
    "/sjo6.webp",
    "/sjo7.webp",
    "/sjo8.webp",
  ];

  return (
    <section className="w-full py-space-2xl bg-surface-container-low border-t border-outline-variant/20 overflow-hidden">
      <div className="max-w-285 mx-auto px-margin-mobile lg:px-margin-desktop mb-space-xl">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-headline text-[28px] md:text-[32px] text-on-surface">
            ¡Gracias por tu colaboración!
          </h2>
          <div className="w-16 h-1 bg-primary-container mx-auto mt-space-sm rounded-full opacity-70" />
        </div>
      </div>

      <div className="w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex ml-space-sm md:ml-space-md gap-space-sm md:gap-space-md">
          {photos.map((src, idx) => (
            <div 
              key={idx} 
              className="relative flex-[0_0_75%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_25%] h-148 md:h-180 rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 group"
            >
              <Image
                src={src}
                alt={`Galería parroquia ${idx + 1}`}
                fill
                quality={90}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 75vw, (max-width: 1024px) 45vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#1B1A20]/0 group-hover:bg-[#1B1A20]/20 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}