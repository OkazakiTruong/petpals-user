import "./style.scss";
export const DoctorItem = () => {
  return (
    <div className="doctor-item">
      <div className="doctor-wrapper">
        <div className="doctor-img">
          <img src="/img/doctor/hoang_an.jpg" alt="" />
          <div className="doctor-contact">
            <div className="contact-item">
              <img src="/icon/ph-link-bold" alt="" />
            </div>
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
