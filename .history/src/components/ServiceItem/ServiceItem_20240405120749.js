import Link from "next/link";
import "./style.scss";
import Parser from "html-react-parser";
const h1 = "<h1>Xin chào</h1>";
export const ServiceItem = () => {
  return (
    <div className="service-item">
      <Link href="#" className="service-wrapper">
        <div className="service-img">
          <img src="/img/service-img/cap_cuu_247.jpg" alt="" srcset="" />
          <div className="service-name">Cấp cứu 24/7</div>
        </div>
        <div className="service-content">
          {ReactHT(h1)}
          <p>
            Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng
            tôi hỗ trợ bạn kịp thời.
          </p>
        </div>
      </Link>
    </div>
  );
};
