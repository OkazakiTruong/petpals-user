"use client";
import React, { useState } from "react";
import "./style.scss";

export default function page({ param }) {
  const [bookingInfo, setBookingInfo] = useState(null);
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Thông tin lịch đặt</p>
      </div>
      <div className="section-heading">THÔNG TIN LỊCH ĐẶT</div>
    </main>
  );
}
