import Link from "next/link";
import "./style.scss";
import { BookingItem } from "@/components/BookingItem/BookingItem";
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
        <BookingItem />
      </section>
    </main>
  );
}
