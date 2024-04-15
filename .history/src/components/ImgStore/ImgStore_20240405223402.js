import React from "react";
import "./style.scss";
import { ImgStoreItem } from "./ImgStoreItem";

export const ImgStore = () => {
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
