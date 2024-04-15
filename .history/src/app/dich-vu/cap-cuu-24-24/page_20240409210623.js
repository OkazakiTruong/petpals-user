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
        <p>Cấp cứu 24/24</p>
      </div>
      <section className="introduce-service">
        <div className="service-img">
          <img src="/img/service-img/cap-cuu-24.png" alt="" />
        </div>
        <div className="information-table">
          <div>
            <h2>THÔNG TIN LIÊN HỆ</h2>
            <p>Liên hệ với chúng tôi để được hỗ trợ một cách sớm nhất nhé!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
