import Link from "next/link";
import "./style.scss";
import { BookingItem } from "@/components/BookingItem/BookingItem";
const listBookingItem = [
  {
    img: "/img/booking-section/kham.png",
    name: "Đặt Lịch Khám",
    title:
      "Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng.",
    link: "#",
  },
  {
    img: "/img/booking-section/kham.png",
    name: "Đặt Lịch Khám",
    title:
      "Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng.",
    link: "#",
  },
  {
    img: "/img/booking-section/kham.png",
    name: "Đặt Lịch Khám",
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
                <img
                  src="/icon/el_group.svg"
                  alt=""
                  srcset=""
                  className="el_group"
                />
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
                <img src="/icon/ic_baseline-phone.svg" alt="" srcset="" />
              </span>
              Liên hệ
            </Link>
          </div>
        </div>
      </section>
      <section className="booking-option">
        <h2 className="section-heading">VÌ SAO NÊN CHỌN PETPALS ?</h2>
        <div className="booking-list">
          <BookingItem />
          <BookingItem />
          <BookingItem />
        </div>
      </section>
    </main>
  );
}
