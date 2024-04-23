"use client";
import "./style.scss";
import React, { useEffect, useCallback, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ServiceItem } from "../ServiceItem/ServiceItem";
import { DoctorItem } from "../DoctorItem/DoctorItem";

const serviceList = [
  {
    img: "/img/service-img/cap_cuu_247.jpg",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
    link: "/dich-vu/cap-cuu-24-24",
  },
  {
    img: "/img/service-img/tiem-vaccine.jpg",
    name: "Tiêm phòng Vaccine",
    detail:
      "Chúng tôi sử dụng vaccine hàng đầu từ Mỹ và Châu Âu. Bạn sẽ luôn an tâm với lựa chọn tiên chủng tại Petpals",
    link: "/dich-vu/tiem-phong-vaccine",
  },
  {
    img: "/img/service-img/kham_benh.jpg",
    name: "Khám và điều trị bệnh",
    detail:
      "Thực hiện tiếp nhận, sàng lọc, khám chuyên khoa,  xét nghiệm, chuẩn đoán và điều trị bệnh cho thú cưng.",
    link: "/dich-vu/kham-suc-khoe",
  },
  {
    img: "/img/service-img/sieu_am.jpg",
    name: "Siêu âm - nội khoa",
    detail:
      "Chúng tôi có máy siêu âm chuyên dụng phục vụ các BOSS đến siêu âm thai, nội khoa, chuyên khoa.",
    link: "/dich-vu/sieu-am-x-quang-xet-nghiem",
  },
  {
    img: "/img/service-img/chup-xquang.jpg",
    name: "Chụp X - Quang",
    detail:
      "Dịch vụ chụp X - Quang chất lượng cao phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả.",
    link: "/dich-vu/sieu-am-x-quang-xet-nghiem",
  },
  {
    img: "/img/service-img/phau_thuat.jpg",
    name: "Phẫu thuật ngoại khoa",
    detail:
      "Đội ngũ bác sĩ của chúng tôi đã thực hiện rất nhiều ca phẫu thuật đa chấn thương cứu sống các bạn vật nuôi",
    link: "/dich-vu/phau-thuat-ngoai-khoa",
  },
  {
    img: "/img/service-img/dich-vu-triet-san-1-425x313.jpg",
    name: "Triệt sản thẩm mỹ",
    detail:
      "Petpal là nơi gửi gắm các bạn thú cưng cần triệt sản, không đau, không xấu, vết mổ liền nhanh.",
    link: "/dich-vu/triet-san",
  },
  {
    img: "/img/service-img/ho_sinh.jpg",
    name: "Đỡ đẻ hộ sinh",
    detail:
      "Bác sĩ cùng trang thiết bị tại Petpals luôn túc trực cùng các bé cún, miu cho một kỳ vượt cạn an toàn.",
    link: "/dich-vu/do-de-ho-sinh",
  },
  {
    img: "/img/service-img/lay_cao_rang.jpg",
    name: "Lấy cao răng",
    detail:
      "Răng thú cưng ố vàng làm mất thẩm mỹ, mảng bám làm miệng có mùi hôi, viêm lợi, sâu răng, và khó khăn trong việc ăn uống? Đừng lo, Petpals đã có giải pháp lý tưởng cho thú cưng của bạn!",
    link: "/dich-vu/lay-cao-rang",
  },
  {
    img: "/img/service-img/kham_benh2.jpg",
    name: "Khám sức khỏe",
    detail:
      "Bạn mới đón thú cưng về và muốn kiểm tra xem bé có đang gặp phải vấn đề gì về sức khoẻ không? Hoặc đơn giản là bạn muốn kiểm tra, tầm soát sức khoẻ hàng năm cho bé thú cưng của mình? ",
    link: "/dich-vu/kham-benh",
  },
  {
    img: "/img/service-img/spa.jpg",
    name: "Spa-grooming",
    detail:
      "Dịch vụ tắm, spa, cắt tỉa lông, làm đẹp, chúng tôi luôn chăm sóc cẩn thận, chu đáo, kỹ càng nhất cho thú cưng của bạn.",
    link: "/dich-vu/spa-grooming",
  },
  {
    img: "/img/service-img/khachsan.jpg",
    name: "Khách sạn thú cưng",
    detail:
      "Địa chỉ tin cậy với hệ thống lưu trú chất lượng. “Sen” sẽ hoàn toàn yên tâm khi vắng mặt, hoặc cần nghỉ ngơi.",
    link: "/dich-vu/khach-san-thu-cung",
  },
];
const doctorList = [
  {
    id: "fe090a69-9d7f-4dad-a398-56556be0658e",
    img: "/img/doctor/hoang_an.jpg",
    name: "Dr.Hoàng An",
    position: "Giám đốc hệ thống",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "01e7d51c-58c9-4086-a240-d6bda2ea610f",
    img: "/img/doctor/quang_truong.jpg",
    name: "Dr.Quang Trưởng",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "92095615-91ba-49da-8240-8259b96b65ec",
    img: "/img/doctor/van_linh.jpg",
    name: "Dr.Văn Linh",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "959da571-b7e0-42e4-ab2e-61bbf69b198f",
    img: "/img/doctor/minh_hanh.jpg",
    name: "Dr.Minh Hanh",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "f9f21422-2ead-48b2-b423-b0ab943c6e27",
    img: "/img/doctor/hoang_duyen.jpg",
    name: "Dr.Hoàng Duyên",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "c8dfb81c-ac62-4d28-8a88-bae510ed9ad8",
    img: "/img/doctor/bui_thao.jpg",
    name: "Dr.Bùi Thảo",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
];
export const Carousel = ({ type }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  let [currentDot, setCurrentDot] = useState(0);

  const onSelect = useCallback((emblaApi) => {
    setCurrentDot(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  if (type === "service") {
    return (
      <>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {serviceList.map((item, index) => {
              if (index % 3 === 0 || index === 0) {
                return (
                  <div className="embla__slide" key={index}>
                    <ServiceItem item={item} />
                    <ServiceItem item={serviceList[index + 1]} />
                    <ServiceItem item={serviceList[index + 2]} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="dot-list">
          {serviceList.map((item, index) => {
            if (index % 3 === 0) {
              return (
                <div
                  key={index}
                  className={
                    currentDot === index / 3 ? "dot dot-active" : "dot"
                  }
                  onClick={() => {
                    emblaApi.scrollTo(index / 3);
                  }}
                ></div>
              );
            }
          })}
        </div>
      </>
    );
  }
  if (type === "doctor") {
    return (
      <>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {doctorList.map((item, index) => {
              if (index % 3 === 0 || index === 0) {
                return (
                  <div className="embla__slide">
                    <DoctorItem item={item} />
                    <DoctorItem item={doctorList[index + 1]} />
                    <DoctorItem item={doctorList[index + 2]} />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="dot-list">
          {doctorList.map((item, index) => {
            if (index % 3 === 0) {
              return (
                <div
                  className={
                    currentDot === index / 3 ? "dot dot-active" : "dot"
                  }
                  onClick={() => {
                    emblaApi.scrollTo(index / 3);
                  }}
                ></div>
              );
            }
          })}
        </div>
      </>
    );
  }
};
