"use client";
import "./style.scss";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ServiceItem } from "../ServiceItem/ServiceItem";

const serviceList = [
  {
    img: "/img/service-img/cap_cuu_247.jpg",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
    link: "#",
  },
  {
    img: "/img/service-img/tiem-vaccine.jpg",
    name: "Tiêm phòng Vaccine",
    detail:
      "Chúng tôi sử dụng vaccine hàng đầu từ Mỹ và Châu Âu. Bạn sẽ luôn an tâm với lựa chọn tiên chủng tại Petpals",
    link: "#",
  },
  {
    img: "/img/service-img/kham_benh.jpg",
    name: "Khám và điều trị bệnh",
    detail:
      "Thực hiện tiếp nhận, sàng lọc, khám chuyên khoa,  xét nghiệm, chuẩn đoán và điều trị bệnh cho thú cưng.",
    link: "#",
  },
  {
    img: "/img/service-img/sieu_am.jpg",
    name: "Siêu âm - nội khoa",
    detail:
      "Chúng tôi có máy siêu âm chuyên dụng phục vụ các BOSS đến siêu âm thai, nội khoa, chuyên khoa.",
    link: "#",
  },
  {
    img: "/img/service-img/chup-xquang.jpg",
    name: "Chụp X - Quang",
    detail:
      "Dịch vụ chụp X - Quang chất lượng cao phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả.",
    link: "#",
  },
  {
    img: "/img/service-img/phau_thuat.jpg",
    name: "Phẫu thuật ngoại khoa",
    detail:
      "Đội ngũ bác sĩ của chúng tôi đã thực hiện rất nhiều ca phẫu thuật đa chấn thương cứu sống các bạn vật nuôi",
    link: "#",
  },
  {
    img: "/img/service-img/dich-vu-triet-san-1-425x313.jpg",
    name: "Triệt sản thẩm mỹ",
    detail:
      "Petpal là nơi gửi gắm các bạn thú cưng cần triệt sản, không đau, không xấu, vết mổ liền nhanh.",
    link: "#",
  },
  {
    img: "/img/service-img/ho_sinh.jpg",
    name: "Đỡ đẻ hộ sinh",
    detail:
      "Bác sĩ cùng trang thiết bị tại Petpals luôn túc trực cùng các bé cún, miu cho một kỳ vượt cạn an toàn.",
    link: "#",
  },
  {
    img: "/img/service-img/lay_cao_rang.jpg",
    name: "Lấy cao răng",
    detail:
      "Răng thú cưng ố vàng làm mất thẩm mỹ, mảng bám làm miệng có mùi hôi, viêm lợi, sâu răng, và khó khăn trong việc ăn uống? Đừng lo, Petpals đã có giải pháp lý tưởng cho thú cưng của bạn!",
    link: "#",
  },
  {
    img: "/img/service-img/kham_benh2.jpg",
    name: "Khám sức khỏe",
    detail:
      "Bạn mới đón thú cưng về và muốn kiểm tra xem bé có đang gặp phải vấn đề gì về sức khoẻ không? Hoặc đơn giản là bạn muốn kiểm tra, tầm soát sức khoẻ hàng năm cho bé thú cưng của mình? ",
    link: "#",
  },
  {
    img: "/img/service-img/ho_sinh.jpg",
    name: "Spa-grooming",
    detail:
      "Dịch vụ tắm, spa, cắt tỉa lông, làm đẹp, chúng tôi luôn chăm sóc cẩn thận, chu đáo, kỹ càng nhất cho thú cưng của bạn.",
    link: "#",
  },
  {
    img: "/img/service-img/ho_sinh.jpg",
    name: "Khách sạn thú cưng",
    detail:
      "Địa chỉ tin cậy với hệ thống lưu trú chất lượng. “Sen” sẽ hoàn toàn yên tâm khi vắng mặt, hoặc cần nghỉ ngơi.",
    link: "#",
  },
];
export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const logSlidesInView = useCallback((emblaApi) => {
    console.log(emblaApi.slidesInView());
  }, []);
  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  }, [emblaApi, logSlidesInView]);
  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {serviceList.map((item, index) => {
            if (index % 3 === 0 || index === 0) {
              return (
                <div className="embla__slide">
                  <ServiceItem item={item} />
                  <ServiceItem item={serviceList[index + 1]} />
                  <ServiceItem item={serviceList[index + 2]} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>
        {serviceList.map((item, index) => {
          if (index % 3 === 0) {
            return (
              <button
                onClick={() => {
                  if (index !== 0) {
                    console.log(index);
                    emblaApi.scrollTo(index - 2);
                  } else {
                    emblaApi.scrollTo(0);
                  }
                }}
              >
                {index}
              </button>
            );
          }
        })}
      </div>
    </>
  );
};
