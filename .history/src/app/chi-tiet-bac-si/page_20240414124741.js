import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Thông tin bác sĩ</p>
      </div>
      <section className="doctor-information">
        <div className="information-wrapper">
          <div className="doctor-img">
            <img src="/img/doctor/hoang_an.jpg" alt="" />
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
