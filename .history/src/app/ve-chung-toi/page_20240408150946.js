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
                Petpals có đội ngũ bác sĩ thú y tay nghề cao, chuyên môn tốt,
                giàu kinh nghiệm, luôn đề cao lương tâm, tính trách nhiệm trong
                công việc và rất yêu thương thú cưng. Cùng với hệ thống máy móc
                thiết bị hiện đại phục vụ cho chẩn đoán và điều trị bệnh.
              </p>
              <p>
                Với slogan “Chữa lành từ trái tim” chúng tôi chăm sóc thú cưng
                của bạn tận tâm với tất cả trái tim mình.
              </p>
              <h3>SỨ MỆNH CỦA CHÚNG TÔI</h3>
              <div className="mission-item">
                <img src="/icon/material-symbols_pets.svg" alt="" />
                <p>
                  Petpals luôn mang đến những dịch vụ chất lượng, uy tín, chuyên
                  nghiệp. Là địa chỉ tin cậy để khách hàng đồng hành trong hành
                  trình nuôi dưỡng, yêu thương và chăm sóc các bạn thú cưng của
                  mình.
                </p>
              </div>
              <div className="mission-item">
                <img src="/icon/material-symbols_pets.svg" alt="" />
                <p>
                  Coi trọng phát triển nguồn nhân lực cũng như nghĩa vụ đối với
                  cộng đồng và xã hội là nhiệm vụ không thể tách rời với việc
                  gia tăng giá trị của cổ đông.
                </p>
              </div>
              <div className="mission-item">
                <img src="/icon/material-symbols_pets.svg" alt="" />
                <p>
                  Xây dựng môi trường làm việc văn minh, lịch sự, tử tế, yêu
                  thương, trách nhiệm.
                </p>
              </div>
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
