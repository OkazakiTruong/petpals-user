"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";

export default function page({ param }) {
  const [bookingInfo, setBookingInfo] = useState(null);
  useEffect(() => {
    let listBooking = localStorage.getItem("list-booking");
    listBooking = listBooking ? JSON.parse(listBooking) : null;
    if (listBooking) {
      listBooking.map((booking) => {
        if (booking.id === param.id) {
          setBookingInfo(booking);
        }
      });
    }
  }, [setBookingInfo]);
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
