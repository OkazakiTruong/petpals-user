import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Dịch vụ</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Liên hệ</p>
      </div>
      <section className="contact-section">
        <div className="section-heading">THÔNG TIN LIÊN HỆ</div>
        <div className="contact-wrapper">
          <div className="contact-item contact-item-small">
            <img src="/icon/fluent_person-support-20-filled.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
