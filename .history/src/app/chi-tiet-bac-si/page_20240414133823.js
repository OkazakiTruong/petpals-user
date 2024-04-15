import React from "react";
import "./style.scss";
const data = [
  {
    id: "fe090a69-9d7f-4dad-a398-56556be0658e",
    name: "Tạ Hoàng An",
    position: "Giám đốc hệ thống",
    img: "/img/doctor/hoan_an.jpg",
  },
  {
    id: "01e7d51c-58c9-4086-a240-d6bda2ea610f",
    name: "Tạ Hoàng An",
    position: "Giám đốc hệ thống",
    img: "/img/doctor/hoan_an.jpg",
  },
  {
    id: "fe090a69-9d7f-4dad-a398-56556be0658e",
    name: "Tạ Hoàng An",
    position: "Giám đốc hệ thống",
    img: "/img/doctor/hoan_an.jpg",
  },
  {
    id: "fe090a69-9d7f-4dad-a398-56556be0658e",
    name: "Tạ Hoàng An",
    position: "Giám đốc hệ thống",
    img: "/img/doctor/hoan_an.jpg",
  },
  {
    id: "fe090a69-9d7f-4dad-a398-56556be0658e",
    name: "Tạ Hoàng An",
    position: "Giám đốc hệ thống",
    img: "/img/doctor/hoan_an.jpg",
  },
  {
    id: "fe090a69-9d7f-4dad-a398-56556be0658e",
    name: "Tạ Hoàng An",
    position: "Giám đốc hệ thống",
    img: "/img/doctor/hoan_an.jpg",
  },
];

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Thông tin bác sĩ</p>
      </div>
      <section className="doctor-information-section">
        <div className="information-wrapper">
          <div className="doctor-img">
            <img src="/img/doctor/hoang_an.jpg" alt="" />
          </div>
          <div className="col-right">
            <div className="information">
              <h3>Thông tin bác sĩ</h3>
              <p className="doctor-name">Dr. TẠ HOÀNG AN</p>
              <p className="doctor-position">Bác sĩ đa khoa</p>
            </div>
            <div className="contact-info">
              <h4>Thông tin liên hệ:</h4>
              <div className="contact-item">
                <img src="/icon/ph_phone.svg" alt="" />
                <p>0977354956</p>
              </div>
              <div className="contact-item">
                <img src="/icon/MailOutlined.svg" alt="" />
                <p>buiquangtruong1105@gmail.com</p>
              </div>
              <div className="social-media">
                <div className="social-media-icon">
                  <img src="/icon/ri_facebook-fill-brown.svg" alt="" />
                </div>
                <div className="social-media-icon">
                  <img src="/icon/mdi_youtube-brown.svg" alt="" />
                </div>
                <div className="social-media-icon">
                  <img src="/icon/lets-icons_insta-brown.svg" alt="" />
                </div>
                <div className="social-media-icon">
                  <img src="/icon/ic_baseline-tiktok-brown.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="degree-wrapper">
          <h2>Trình độ / Chứng chỉ</h2>
          <div className="table">
            <div className="row row-brown">
              <div className="col">2006</div>
              <div className="col">
                Cử nhân Bác sĩ Thú y (D.V.M), Đại học Chulalongkorn 2006
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
