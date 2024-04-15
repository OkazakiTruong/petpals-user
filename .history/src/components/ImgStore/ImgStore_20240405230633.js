import React, { useState } from "react";
import "./style.scss";
import { ImgStoreItem } from "./ImgStoreItem";

const listSeeADoctor = [
  { img: "/img/service-img/tiem-vaccine.jpg", name: "tiêm vaccine" },
  { img: "/img/service-img/kham_benh2.jpg", name: "khám bệnh" },
  { img: "/img/service-img/sieu_am.jpg", name: "siêu âm" },
];
const listSpaGrooming = [];
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
