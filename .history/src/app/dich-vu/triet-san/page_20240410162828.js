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
                Sau mũi 2 28 ngày: Tiêm mũi 3 vaccine tổng hợp 7 bệnh để đảm bảo
                sự bảo vệ toàn diện cho chó yêu quý của bạn.
              </li>
              <li>
                Chó 3 tháng tuổi trở lên: Tiêm 1 mũi vaccine phòng bệnh dại.
              </li>
              <li>
                Chó đã chích ngừa đầy đủ cũng cần tiêm nhắc lại định kỳ hàng
                năm: 1 mũi vaccine tổng hợp 7 bệnh và 1 mũi vaccine phòng bệnh
                dại.
              </li>
            </ul>
          </div>
          <p>
            Bên cạnh đó, hệ thống không ngừng nâng cấp và đầu tư các trang thiết
            bị y tế hiện đại và công nghệ tiên tiến giúp chẩn đoán chính xác và
            điều trị hiệu quả. Sử dụng các dụng cụ và thiết bị y tế hàng đầu
            trong ngành thú y để đảm bảo khả năng chẩn đoán nhanh chóng và xử lý
            các tình huống khẩn cấp một cách chính xác.
          </p>
          <p>
            Chúng tôi luôn đặt sức khỏe thú cưng lên hàng đầu và đảm bảo quy
            trình tiêm phòng an toàn. Trước khi tiêm vaccine, chúng tôi tư vấn
            về các biện pháp chuẩn bị cần thiết, như tẩy giun và kiểm tra sức
            khỏe tổng quát của thú cưng. Sau khi tiêm vaccine, chúng tôi sẽ
            hướng dẫn bạn về cách chăm sóc sau tiêm, giúp thú cưng của bạn đạt
            được hiệu quả cao nhất và hồi phục nhanh chóng. Dưới đây là lịch
            trình tiêm vaccine được sử dụng tại Petpals
          </p>

          <div>
            <h3>Lịch tiêm vaccine mèo:</h3>
            <ul>
              <li>
                Mèo từ 2 tháng tuổi: Tiêm vaccine tổng hợp 4 bệnh như Bệnh Giảm
                bạch cầu, Bệnh Viêm mũi – khí quản truyền nhiễm và Bệnh Hô hấp
                do Herpevirus.
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
