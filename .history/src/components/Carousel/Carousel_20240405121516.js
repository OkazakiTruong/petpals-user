"use client";
import "./style.scss";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const serviceList = [
  {
    img: "/img/service-img/cap_cuu_247",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
    link: "#",
  },
  {
    img: "/img/service-img/tiem-vaccine",
    name: "Tiêm phòng Vaccine",
    detail:
      "Chúng tôi sử dụng vaccine hàng đầu từ Mỹ và Châu Âu. Bạn sẽ luôn an tâm với lựa chọn tiên chủng tại Petpals",
    link: "#",
  },
  {
    img: "/img/service-img/cap_cuu_247",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
  },
  {
    img: "/img/service-img/cap_cuu_247",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
  },
  {
    img: "/img/service-img/cap_cuu_247",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
  },
  {
    img: "/img/service-img/cap_cuu_247",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
  },
  {
    img: "/img/service-img/cap_cuu_247",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
  },
  {
    img: "/img/service-img/cap_cuu_247",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
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
