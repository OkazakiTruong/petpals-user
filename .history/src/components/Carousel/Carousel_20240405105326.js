"use client";
import "./style.scss";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const serviceList = [
  {
    img: "/img/service-img/cap_cuu_247",
  },
];
export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
      <button
        onClick={() => {
          emblaApi.scrollTo(0);
        }}
      >
        next
      </button>
    </div>
  );
};
