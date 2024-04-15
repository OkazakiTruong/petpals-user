import Link from "next/link";
import "./style.scss";
export default function Home() {
  return (
    <main>
      <div className="banner">
        <div className="overlay"></div>
        <div className="banner-content">
          <h2 className="banner-heading">HỆ THỐNG THÚ Y PETPALS</h2>
          <h2 className="banner-main-heading">
            CHỮA LÀNH <br /> TỪ TRÁI TIM
          </h2>
          <div className="group-btn">
            <Link href="/" className="banner-button">
              <span>
                <img src="/icon/el_group.svg" alt="" srcset="" />
              </span>
              Về chúng tôi
            </Link>
            <Link href="/" className="banner-button">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
