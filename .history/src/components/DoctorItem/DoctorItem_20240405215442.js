import "./style.scss";
import Link from "next/link";

export const DoctorItem = () => {
  return (
    <div className="doctor-item">
      <div className="doctor-wrapper">
        <div className="doctor-img">
          <img src="/img/doctor/hoang_an.jpg" alt="" />
          <div className="doctor-contact">
            <div className="contact-item">
              <img src="/icon/ph_link-bold.svg" alt="" />
            </div>
            <Link href="#" className="contact-item hidden">
              <img src="/icon/mdi_eye.svg" alt="" />
            </Link>
            <Link href="#" className="contact-item hidden">
              <img src="/icon/ri_facebook-fill.svg" alt="" />
            </Link>
            <Link href="#" className="contact-item hidden">
              <img src="/icon/ic_baseline-tiktok.svg" alt="" />
            </Link>
            <Link href="#" className="contact-item hiddne">
              <img src="/icon/lets-icons_insta.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="doctor-info">
          <h3>Dr.Hoàng An</h3>
          <p>Giám đốc hệ thống</p>
        </div>
      </div>
    </div>
  );
};
