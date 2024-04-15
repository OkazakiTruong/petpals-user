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
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ CẤP CỨU 24/24</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/service-img/cap-cuu-24.png" alt="" />
          </div>
          <div className="information-table">
            <div className="information-heading">
              <h2>THÔNG TIN LIÊN HỆ</h2>
              <p>Liên hệ với chúng tôi để được hỗ trợ một cách sớm nhất nhé!</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="heading">Địa Chỉ:</div>
                <div className="content">
                  Số 96 Định Công, Hoàng Mai, Hà Nội
                </div>
              </div>
              <div className="row">
                <div className="heading">Hotline:</div>
                <div className="content">0977354956</div>
              </div>
              <div className="row">
                <div className="heading">Email:</div>
                <div className="content">petpals@gmail.com</div>
              </div>
              <div className="row">
                <div className="heading">Website:</div>
                <div className="content">www.petpals.com</div>
              </div>
              <div className="row">
                <div className="heading">Fanpage:</div>
                <div className="content">fb.com/Petpals</div>
              </div>
            </div>
          </div>
          <div className="content">
            <p>
              Khi thú cưng của bạn gặp phải các tình huống khẩn cấp, nguy hiểm
              như khó đẻ, nuốt dị vật, ngộ độc, tai nạn, cắn nhau,… hãy liên hệ
              ngay với chi nhánh Petpals gần bạn nhất để nhận được các hỗ trợ y
              tế kịp thời. Dịch vụ cấp cứu thú cưng của chúng tôi hoạt
              động 24/24 tất cả các ngày bao gồm cả các ngày cuối tuần và lễ,
              tết. Dưới đây là thông tin liên hệ của các chi nhánh Petpals, vì
              tính cấp bách hãy liên hệ ngay tới hotline chi nhánh gần bạn nhất
              để nhận được hỗ trợ kịp thời:
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
