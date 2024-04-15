import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Dịch vụ</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Triệt sản thẩm mỹ</p>
      </div>
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ TRIỆT SẢN</div>
        <div className="introduce-service">
          <div className="service-img">
            <img
              src="/img/service-img/dich-vu-triet-san-1-425x313.jpg"
              alt=""
            />
          </div>
          <div className="information-table">
            <div className="information-heading">
              <h2>THÔNG TIN LIÊN HỆ</h2>
              <p>Liên hệ với chúng tôi để được hỗ trợ một cách sớm nhất nhé!</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="heading">Địa Chỉ:</div>
                <div className="content">
                  Số 96 Định Công, Hoàng Mai, Hà Nội
                </div>
              </div>
              <div className="row">
                <div className="heading">Hotline:</div>
                <div className="content">0977354956</div>
              </div>
              <div className="row">
                <div className="heading">Email:</div>
                <div className="content">petpals@gmail.com</div>
              </div>
              <div className="row">
                <div className="heading">Website:</div>
                <div className="content">www.petpals.com</div>
              </div>
              <div className="row">
                <div className="heading">Fanpage:</div>
                <div className="content">fb.com/Petpals</div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content">
          <p>
            Triệt sản thú cưng là một việc cần thiết bạn nên làm để tạo điều
            kiện sống thuận lợi và bảo vệ sức khỏe cho thú cưng của mình. Việc
            này không chỉ giúp chúng phát triển khoẻ mạnh mà còn đóng vai trò
            quan trọng trong việc kéo dài tuổi thọ. Bệnh viện Thú y Petpals là
            một địa chỉ uy tín tại Hà Nội chuyên cung cấp dịch vụ triệt sản thẩm
            mỹ thú cưng với cam kết đem lại cuộc phẫu thuật an toàn và không gây
            đau cho thú cưng của bạn.
          </p>
          <p>
            Nhiều người thường có lo ngại khi nghĩ đến việc triệt sản cho các bé
            Cún, Miu của mình. Họ lo ngại rằng quá trình này có thể ảnh hưởng
            đến bản năng và tính cách của thú cưng, cũng như đề phòng về nguy cơ
            không an toàn nếu thực hiện tại các địa chỉ không đáng tin cậy hoặc
            bởi các bác sĩ thú y không có đủ kinh nghiệm. Tuy nhiên, việc tìm
            kiếm một bệnh viện thú y đáng tin cậy, trang bị thiết bị hiện đại và
            có đội ngũ bác sĩ chuyên nghiệp là chìa khóa để đảm bảo dịch vụ
            triệt sản chó mèo mang lại nhiều lợi ích, từ an toàn cho thú cưng
            đến sự yên tâm cho chủ nhân.
          </p>
          <h3>Một số lợi ích khi triệt sản thú cưng</h3>
          <div>
            <ul>
              <li>Giảm nguy cơ vấn đề sức khỏe do mang thai.</li>
              <li>Phòng ngừa bệnh ung thư vú ở động vật cái.</li>
              <li>
                Kiểm soát bản năng sinh dục tự nhiên, giảm nguy cơ tình trạng đi
                tiểu lung tung và đánh dấu lãnh thổ của các chú chó, mèo đực.
              </li>
              <li>
                Tiện lợi trong việc chăm sóc và di chuyển vật nuôi, đồng thời
                giảm khả năng động dục.
              </li>
              <li>
                Thân thiện với môi trường hơn bằng cách hạn chế sự tăng trưởng
                không kiểm soát của các loài thú cưng.
              </li>
              <li>
                Ngăn chặn sự lây nhiễm bệnh cho những con non chưa được tiêm
                phòng đầy đủ.
              </li>
              <li>
                Giảm nguy cơ thú cưng bị bỏ rơi hoặc không có chỗ ở, giúp giảm
                áp lực cho các trung tâm cứu hộ động vật và các cơ sở bảo vệ thú
                cưng.
              </li>
              <li>
                Triệt sản giúp giảm tiếng kêu không mong muốn của thú cưng khi
                chúng tìm kiếm đối tác sinh sản.
              </li>
            </ul>
          </div>
          <h3>Quy trình Triệt sản cho thú cưng tại Bệnh viện Thú y Petpals:</h3>
          <div>
            <p>
              <b>Bước 1:</b> Kiểm tra sức khỏe tổng quan:
            </p>
            <ul>
              <li>
                Thực hiện kiểm tra lâm sàng sức khỏe thú cưng để đánh giá tình
                trạng sức khỏe chung.
              </li>
              <li>
                Sau mũi 1 28 ngày: Tiêm mũi 2 vaccine tổng hợp 4 bệnh để đảm bảo
                hiệu quả phòng ngừa bệnh tốt nhất.
              </li>
              <li>
                Sau mũi 2 28 ngày: Tiêm mũi 3 vaccine tổng hợp 4 bệnh để bảo vệ
                sức khỏe mèo yêu của bạn.
              </li>
              <li>
                Mèo từ 3 tháng tuổi trở lên có thể tiêm vaccine phòng bệnh dại.
              </li>
              <li>
                Nên hoàn thành việc tiêm vaccine trước khi mèo tròn 1 năm tuổi.
                Sau đó, tiêm nhắc lại hàng năm với tất cả các loại vaccine.
              </li>
            </ul>
          </div>
          <div>
            <h3>Tại Tropicpet, chúng tôi cam kết:</h3>
            <ul>
              <li>
                Đội ngũ bác sĩ thú y giàu kinh nghiệm, tận tâm và yêu động vật.
              </li>
              <li>
                Sử dụng vaccine chất lượng cao từ các nhà sản xuất của Mỹ và
                Châu Âu
              </li>
              <li>
                Đảm bảo tiêm vaccine đúng lịch trình và an toàn tuyệt đối cho
                thú cưng của bạn.
              </li>
              <li>
                Tư vấn chuyên nghiệp về lịch trình vaccine và các vấn đề liên
                quan đến sức khỏe của thú cưng.
              </li>
              <li>
                Tạo môi trường thân thiện, an toàn và thoải mái cho thú cưng của
                bạn.
              </li>
            </ul>
          </div>
          <p>
            Hãy đến với Petpals chi nhánh gần nhất ngay hôm nay và đặt lịch tiêm
            vaccine cho thú cưng của bạn! Chúng tôi sẵn sàng đồng hành cùng bạn
            trong việc bảo vệ sức khỏe và hạnh phúc của thú cưng yêu quý.
          </p>
        </div>
      </section>
    </main>
  );
}
