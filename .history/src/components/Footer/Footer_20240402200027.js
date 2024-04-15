import "./style.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="row row-1">
        <div className="logo">
          <img src="/img/logo_am_ban.svg" alt="" />
        </div>
        <div className="working-time">Thời gian làm việc</div>
        <div className=" contact-info">Thông tin liên hệ</div>
      </div>
      <div className="row">
        <div className="about">
          Petpals là hệ thống bệnh viện thú y chất lượng cao. Chúng tôi sở hữu
          những y bác sĩ với nhiều năm kinh nghiệm cùng hệ thống trang thiết bị
          y tếhiện đại hứa hẹn sẽ đem lại cho bạn các giải pháp và dịch vụ chăm
          sóc thú cưng toàn diện và chuyên nghiệp TOP đầu tại Hà Nội.
        </div>
        <ul className="working-time-more">
          <li>Chúng tôi mở cửa tất cả các ngày trong tuần</li>
          <li>Khung giờ mở cửa 08:00-21:00</li>
          <li>Trực đêm từ 21:00</li>
        </ul>
        <ul className="contact-info-more">
          <li>petpal@gmail.com</li>
          <li>0977354956</li>
          <li>Số 96, Định Công, Hà Nội</li>
          <li>www.petpals.com</li>
        </ul>
      </div>
    </footer>
  );
};
