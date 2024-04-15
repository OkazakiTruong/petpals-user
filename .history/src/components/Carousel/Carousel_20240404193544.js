"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./style.scss";

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
};