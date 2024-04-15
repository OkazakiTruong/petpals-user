import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <section className="about-section">
        <h2 className="section-heading">VỀ CHÚNG TÔI</h2>
        <div className="section-content">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <p>
                Petpals là hệ thống bệnh viện thú y chất lượng cao, hiện tại
                chúng tôi đang hoạt động trên địa bàn Hà Nội, hệ thống đã phục
                vụ hơn 20.000 khách hàng. Ngay từ khi thành lập, chúng tôi đã
                chọn xây dựng giá trị “Khách hàng hân hoan – Thú cưng hạnh phúc”
                làm định hướng phát triển lâu dài. Mục tiêu trở thành hệ thống
                chăm sóc thú cưng toàn diện có chất lượng hàng đầu tại Việt Nam.
              </p>
              <p>
                Để hướng tới mục tiêu đó, chúng tôi tập trung xây dựng đội ngũ
                bác sĩ thú y tay nghề cao, chuyên môn tốt. Nhân viên dưới sự đào
                tạo bài bản, chuyên môn hóa. Liên tục nâng cấp, đầu tư trang
                thiết bị máy móc, cơ sở vật chất, cải tiến quy trình hiệu quả để
                phục vụ khách hàng nhanh hơn, văn hóa cao hơn. Tất cả đều đã sẵn
                sàng để mang đến cho quý khách hàng những trải nghiệm về các
                giải pháp, dịch vụ hoàn hảo nhất với giá cả hợp lý nhất. 
              </p>
              <p>
                Khi đến với Petpals bạn có thể sử dụng tất cả các dịch vụ cho
                thú cưng của mình. Từ khám chữa bệnh, tiêm phòng, khách sạn đến
                spa, làm đẹp,… Các dịch vụ của chúng tôi đã giúp cho rất nhiều
                các bé thú cưng được khám và điều trị bệnh kịp thời, có cuộc
                sống khỏe mạnh, dễ thương hơn và hạnh phúc.
              </p>
              <p>
                Để dành sự quan tâm và chăm sóc tốt nhất cho thú cưng của bạn,
                hãy lưu số Hotline chi nhánh gần nhất của Petpals vào điện
                thoại, để sẵn sàng gọi cho chúng tôi khi cần bạn nhé!
              </p>
              <p style={{ textAlign: "right" }}>Thân ái, đội ngũ Petpals</p>
            </div>
            <div className="about-img">
              <div className="overlay"></div>
              <div className="img-content">
                <div className="img-content-item">
                  <img src="/icon/raphael_customer.svg" alt="" />
                  <h3>98%</h3>
                  <p>Khách hàng hài lòng</p>
                </div>
                <div className="img-content-item">
                  <img src="/icon/solar_hospital-bold.svg" alt="" />
                  <h3>4+</h3>
                  <p>Năm kinh nghiệm</p>
                </div>
                <div className="img-content-item">
                  <img src="/icon/ic_baseline-pets.svg" alt="" />
                  <h3>20K+</h3>
                  <p>Pet được chăm sóc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
