import "./style.scss";
export const ServiceItem = () => {
  return (
    <div className="service-item">
      <div className="service-wrapper">
        <div className="service-img">
          <img src="/img/service-img/cap_cuu_247.jpg" alt="" srcset="" />
          <div className="service-name">Cấp cứu 24/7</div>
        </div>
        <div className="service-content">
          <p>
            Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng
            tôi hỗ trợ bạn kịp thời.
          </p>
        </div>
      </div>
    </div>
  );
};
