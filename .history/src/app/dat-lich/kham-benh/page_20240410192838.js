import "./style.scss";
import React from "react";
import { Steps } from "antd";

export default function page() {
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
        <Steps
          current={1}
          items={[
            {
              title: "Finished",
            },
            {
              title: "In Progress",
              subTitle: "Left 00:00:08",
            },
            {
              title: "Waiting",
            },
          ]}
        />
      </section>
    </main>
  );
}
