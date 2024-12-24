"use client"

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import decor from '/public/hero/decor.svg';

const scrollerTexts = [
  "Атмосфера",
  "Стиль",
  "Музыка",
  "энергетика",
  "уют",
  "События",
  "впечатления",
  "Эмоции",
  "комфорт",
];

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
}

export default function Hero({ imageSrc }: HeroProps) {
  return (
    <section className="pb-7 md:pb-10 lg:pb-14">
      <div className='hero-img'>
        <Image
          src={imageSrc}
          width={1920}
          height={843}
          alt="hero"
          className="w-full object-cover brightness-[.30]"
        />
      </div>
      <InfiniteScroller />
    </section>
  );
}

function InfiniteScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setScrollPosition(scrollLeft);

        // Reset scroll position when reaching the end
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (scrollRef.current && isAnimating) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isAnimating]);

  return (
    <div className="w-full overflow-hidden bg-black dark:border-y dark:border-[#1c1c21]">
      <div
        ref={scrollRef}
        className="scrollbar-hide flex overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex">
            {scrollerTexts.map((text, textIndex) => (
              <div
                key={`${index}-${textIndex}`}
                className="flex items-center space-x-6 whitespace-nowrap px-6 py-3 sm:space-x-11 sm:px-11 sm:py-5"
              >
                <div className="size-10">
                  <Image src={decor} alt="decor" />
                </div>
                <p className="text-sm uppercase text-white sm:text-lg">
                  {text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}