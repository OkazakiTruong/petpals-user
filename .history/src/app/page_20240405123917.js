import Link from "next/link";
import "./style.scss";
import { BookingItem } from "@/components/BookingItem/BookingItem";
import { Carousel } from "@/components/Carousel/Carousel";
import { ServiceItem } from "@/components/ServiceItem/ServiceItem";
const listBookingItem = [
  {
    img: "/img/booking-section/kham.png",
    name: "Đặt Lịch Khám",
    title:
      "Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng.",
    link: "#",
  },
  {
    img: "/img/booking-section/spa.png",
    name: "Đặt Lịch Spa-Grooming",
    title:
      "Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng.",
    link: "#",
  },
  {
    img: "/img/booking-section/khachsan.png",
    name: "Đặt Lịch Khách Sạn Thú Cưng",
    title:
      "Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng.",
    link: "#",
  },
];
export default function Home() {
  return (
    <main>
      <section className="banner">
        <div className="overlay"></div>
        <div className="banner-content">
          <h2 className="banner-heading">HỆ THỐNG THÚ Y PETPALS</h2>
          <h2 className="banner-main-heading">
            CHỮA LÀNH <br /> TỪ TRÁI TIM
          </h2>
          <div className="group-btn">
            <Link href="/" className="banner-button">
              <span className="icon">
                <img src="/icon/el_group.svg" alt="" className="el_group" />
                <img
                  src="/icon/el_group_brown.svg"
                  alt=""
                  className="el_group_brown"
                />
              </span>
              Về chúng tôi
            </Link>
            <Link href="/" className="banner-button">
              <span className="icon">
                <img src="/icon/ic_baseline-phone.svg" alt="" />
              </span>
              Liên hệ
            </Link>
          </div>
        </div>
      </section>
      <section className="booking-option">
        <h2 className="section-heading">ĐẶT LỊCH CHO THÚ CƯNG CỦA BẠN</h2>
        <div className="booking-list">
          {listBookingItem.map((item, index) => {
            return <BookingItem key={index} item={item} />;
          })}
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-heading">VÌ SAO NÊN CHỌN PETPALS ?</h2>
        <div className="section-content">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <p>
                Petpals là hệ thống bệnh viện thú y chất lượng, uy tín TOP đầu
                Hà Nội. Hệ thống của chúng tôi đã phục vụ hơn 20.000 khách hàng
                với sự tín nhiệm và tin tưởng rất lớn.
              </p>
              <p>
                Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm
                sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn
                đoán điều trị rõ ràng. Nhân viên của Petpals sẽ luôn duy trì
                kênh liên lạc với bạn để cập nhật thường xuyên, liên tục tình
                hình của các bạn thú cưng, chắc chắn rằng bạn sẽ an tâm khi gửi
                gắm thú cưng của cho chúng tôi.
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
      <section className="our-service-section">
        <h2 className="section-heading">DỊCH VỤ CHÚNG TÔI CUNG CẤP</h2>
        <div className="our-service-container">
          <Carousel />
        </div>
      </section>
    </main>
  );
}
