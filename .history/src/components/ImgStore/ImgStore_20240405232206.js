import React, { useState } from "react";
import "./style.scss";
import { ImgStoreItem } from "./ImgStoreItem";

const listSeeADoctor = [
  { img: "/img/service-img/tiem-vaccine.jpg", name: "tiêm vaccine" },
  { img: "/img/service-img/kham_benh2.jpg", name: "khám bệnh" },
  { img: "/img/service-img/sieu_am.jpg", name: "siêu âm" },
  { img: "/img/service-img/kham-chua-benh-xet-nghiem.jpg", name: "xét nghiệm" },
  { img: "/img/service-img/soi-nhuom.jpg", name: "soi nhuộm giemsa" },
  { img: "/img/service-img/chup-xquang.jpg", name: "chụp x-quang" },
  { img: "/img/service-img/phau_thuat.jpg", name: "phẫu thuật" },
  { img: "/img/service-img/cap_cuu_247.jpg", name: "điều trị nội trú" },
  { img: "/img/service-img/kham_benh.jpg", name: "khám lâm sàn" },
  {
    img: "/img/service-img/dich-vu-triet-san-1-425x313.jpg",
    name: "triệt sản",
  },
  { img: "/img/service-img/ho_sinh.jpg", name: "phẫu thuật" },
  { img: "/img/service-img/cat-duoi-cun.jpg", name: "phẫu thuật" },
];
const listSpaGrooming = [
  { img: "/img/spa-grooming/spa-cat-tia-2.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-cat-tia-3.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-cat-tia-3-1.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-cat-tia-5-1.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-cat-tia-5.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-grooming-1-1.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-grooming-1.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-grooming-2.png", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-grooming-3.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-grooming-4.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-grooming-4-1.jpg", name: "spa-grooming" },
  { img: "/img/spa-grooming/spa-grooming-7.jpg", name: "spa-grooming" },
];
const listPetHotel = [];

export const ImgStore = () => {
  const [currentList, setCurrentList] = useState(listSeeADoctor);
  return (
    <div className="img-store">
      <div className="btn-group">
        <button>KHÁM CHỮA BỆNH</button>
        <button>SPA GROOMING</button>
        <button>KHÁCH SẠN THÚ CƯNG</button>
      </div>
      <ImgStoreItem />
    </div>
  );
};
