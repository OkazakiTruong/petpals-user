"use client";
import React, { useState } from "react";

const listSeeADoctor = [];
const listSpaGrooming = [];
const listPetHotel = [];
export const ImgStoreItem = () => {
  const currentList = useState(listSeeADoctor);
  return (
    <div className="img-store-item">
      <img src="/img/service-img/cap_cuu_247.jpg" alt="" />
      <div className="hidden">
        <div className="overlay"></div>
        <p className="img-name">TIÊM VACCINE</p>
      </div>
    </div>
  );
};
