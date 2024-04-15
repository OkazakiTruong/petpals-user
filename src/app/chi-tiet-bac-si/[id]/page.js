"use client";
import React, { useState } from "react";
import "./style.scss";
const data = [
  {
    id: "fe090a69-9d7f-4dad-a398-56556be0658e",
    img: "/img/doctor/hoang_an.jpg",
    name: "Dr.Hoàng An",
    position: "Giám đốc hệ thống",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "01e7d51c-58c9-4086-a240-d6bda2ea610f",
    img: "/img/doctor/quang_truong.jpg",
    name: "Dr.Quang Trưởng",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "92095615-91ba-49da-8240-8259b96b65ec",
    img: "/img/doctor/van_linh.jpg",
    name: "Dr.Văn Linh",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "959da571-b7e0-42e4-ab2e-61bbf69b198f",
    img: "/img/doctor/minh_hanh.jpg",
    name: "Dr.Minh Hanh",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "f9f21422-2ead-48b2-b423-b0ab943c6e27",
    img: "/img/doctor/hoang_duyen.jpg",
    name: "Dr.Hoàng Duyên",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
  {
    id: "c8dfb81c-ac62-4d28-8a88-bae510ed9ad8",
    img: "/img/doctor/bui_thao.jpg",
    name: "Dr.Bùi Thảo",
    position: "Bác sĩ đa khoa",
    more: "#",
    facebook: "#",
    tiktok: "#",
    insta: "#",
  },
];

export default function page({ params }) {
  const [doctor, setDoctor] = useState(
    data.filter((doctor) => doctor.id === params.id)[0]
  );
  useState(() => {
    console.log(doctor);
  });
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
            <img src={doctor?.img} alt="" />
          </div>
          <div className="col-right">
            <div className="information">
              <h3>Thông tin bác sĩ</h3>
              <p className="doctor-name">{doctor?.name}</p>
              <p className="doctor-position">{doctor?.position}</p>
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
