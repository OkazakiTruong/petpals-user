import "./style.scss";
import Link from "next/link";

export const DoctorItem = ({ item }) => {
  return (
    <div className="doctor-item">
      <div className="doctor-wrapper">
        <div className="doctor-img">
          <img src={item.img} alt="" />
          <div className="doctor-contact">
            <div className="contact-item">
              <img src="/icon/ph_link-bold.svg" alt="" />
            </div>
            <Link href={item.more} className="contact-item hidden">
              <img src="/icon/mdi_eye.svg" alt="" />
            </Link>
            <Link href={item.facebook} className="contact-item hidden">
              <img src="/icon/ri_facebook-fill.svg" alt="" />
            </Link>
            <Link href={item.tiktok} className="contact-item hidden">
              <img src="/icon/ic_baseline-tiktok.svg" alt="" />
            </Link>
            <Link href={item.insta} className="contact-item hidden">
              <img src="/icon/lets-icons_insta.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="doctor-info">
          <h3>{item.name}</h3>
          <p>{item.title}</p>
        </div>
      </div>
    </div>
  );
};
