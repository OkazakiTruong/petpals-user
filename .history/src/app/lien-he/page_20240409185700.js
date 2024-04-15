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
            <div>
              <img src="/icon/fluent_person-support-20-filled.svg" alt="" />
              <h3>LIÊN HỆ</h3>
            </div>
            <p>0977354956</p>
          </div>
          <div className="contact-item">
            <div>
              <img src="/icon/fluent_person-support-20-filled.svg" alt="" />
              <h3>ĐỊA CHỈ</h3>
            </div>
            <p>96 P. Định Công, Định Công, Hoàng Mai, Hà Nội, Việt Nam</p>
          </div>
          <div className="contact-item contact-item-small">
            <div>
              <img src="/icon/fluent_person-support-20-filled.svg" alt="" />
              <h3>EMAIL</h3>
            </div>
            <p>Petpals@gmail.com</p>
          </div>
        </div>
      </section>
      <section className="form-contact">
        <div className="section-heading">GỬI THÔNG TIN CHO CHÚNG TÔI</div>
      </section>
    </main>
  );
}
