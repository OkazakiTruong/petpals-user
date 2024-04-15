"use client";
import "./style.scss";
import React, { useState } from "react";
import { Steps } from "antd";
import StepItem from "./StepItem";

export default function page() {
  const [current, setCurrent] = useState(0);
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Đặt lịch</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Lịch khám</p>
      </div>
      <section className="booking-section">
        <div className="section-heading">ĐẶT LỊCH KHÁM</div>
        <div className="booking-wrapper">
          <Steps
            current={current}
            items={[
              {
                title: "Bước 1",
                description: "Thông tin lịch đặt",
              },
              {
                title: "Bước 2",
                description: "Thông tin thú cưng",
              },
              {
                title: "Bước 3",
                description: "Xác nhận lịch hẹn",
              },
              {
                title: "Bước 4",
                description: "Chờ liên hệ lại",
              },
            ]}
          />
          <StepItem step={current} />
          <div className="btn-wrapper">
            <button onClick={setCurrent(current - 1)}>Hủy</button>
            <button
              onClick={() => {
                setCurrent(current + 1);
              }}
            >
              Tiếp tục
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
