import Link from "next/link";
import "./style.scss";
export const BookingItem = ({ item }) => {
  return (
    <div class="booking-item">
      <div class="booking-img">
        <img src={item.img} alt="" />
        <h3 className="booking-name">Đặt Lịch Khám</h3>
      </div>
      <div>
        <div className="booking-content">
          <p className="content">
            Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc
            tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều
            trị rõ ràng.
          </p>
          <Link href="#" className="btn">
            Đặt lịch ngay
          </Link>
        </div>
      </div>
    </div>
  );
};
