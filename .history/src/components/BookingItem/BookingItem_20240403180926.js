import Link from "next/link";
import "./style.scss";
export const BookingItem = ({ item }) => {
  return (
    <div class="booking-item">
      <div class="booking-img">
        <img src={item.img} alt="" />
        <h3 className="booking-name">{item.name}</h3>
      </div>
      <div>
        <div className="booking-content">
          <p className="content">{item.title}</p>
          <Link href={item.link} className="btn">
            Đặt lịch ngay
          </Link>
        </div>
      </div>
    </div>
  );
};
