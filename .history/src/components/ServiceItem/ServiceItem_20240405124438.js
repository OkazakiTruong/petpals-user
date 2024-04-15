import Link from "next/link";
import "./style.scss";
export const ServiceItem = ({ item }) => {
  return (
    <div className="service-item">
      <Link href={item.link} className="service-wrapper">
        <div className="service-img">
          <img src={item.img} alt="" srcset="" />
          <div className="service-name">{item.name}</div>
        </div>
        <div className="service-content">
          <p>{item.detail}</p>
        </div>
      </Link>
    </div>
  );
};
