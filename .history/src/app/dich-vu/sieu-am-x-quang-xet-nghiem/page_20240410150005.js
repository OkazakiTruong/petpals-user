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
        <p>Siêu âm, x-quang, xét nghiệm</p>
      </div>
      <section className="service-section">
        <div className="section-heading">
          DỊCH VỤ SIÊU ÂM, X-QUANG, XÉT NGHIỆM
        </div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/service-img/sieu_am.jpg" alt="" />
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
            Bạn quan tâm đến sức khỏe và chăm sóc cho thú cưng của mình? Hãy để
            Petpals đảm nhận vai trò chăm sóc y tế toàn diện cho bạn. Với dịch
            vụ siêu âm, chụp X-quang và xét nghiệm, chúng tôi cam kết đem lại
            chẩn đoán chính xác và điều trị tối ưu cho thú cưng của bạn.
          </p>

          <div>
            <ul>
              <li>
                <b>Siêu âm:</b> Để đảm bảo thú cưng của bạn luôn khỏe mạnh,
                chúng tôi cung cấp dịch vụ siêu âm chuyên sâu. Bằng phương pháp
                này, chúng tôi có thể đánh giá tình trạng sức khỏe, chẩn đoán
                các vấn đề mang thai, khối u, và các vấn đề khác liên quan đến
                vùng bụng.
              </li>
              <li>
                <b>Chụp X-quang:</b> Chúng tôi sở hữu máy chụp X-quang hiện đại,
                giúp phát hiện các vấn đề về xương khớp, khối u, cũng như các
                vật thể lạ trong cơ thể thú cưng. Chụp X-quang còn là công cụ
                quan trọng để chẩn đoán nhiều loại bệnh khác nhau.
              </li>
              <li>
                <b>Chụp X-quang:</b> Xác định tình trạng tim phổi, xương – khớp,
                hệ tiêu hóa, bàng quang và phát hiện khối u trong cơ thể.
              </li>
              <li>
                <b>Tư vấn chăm sóc:</b> Bác sĩ sẽ tư vấn về chế độ dinh dưỡng,
                chăm sóc, huấn luyện thú cưng để thú cưng của bạn phát triển một
                cách tốt nhất.
              </li>
            </ul>
          </div>

          <p>
            Dịch vụ khám lâm sàng sức khỏe cho thú cưng giúp phát hiện sớm các
            vấn đề sức khỏe tiềm ẩn, như nhiễm trùng, vi khuẩn, virus và các
            bệnh lý khác. Ngoài ra, nó cũng giúp xác định các chỉ số cơ bản của
            thú cưng như trọng lượng, chức năng nội tạng, và mức độ hoạt động.
            Với dịch vụ khám sức khỏe cho thú cưng, bạn có thể yên tâm và đảm
            bảo rằng thú cưng của bạn đang được theo dõi và chăm sóc một cách
            toàn diện. Chúng tôi sẽ đưa ra các khuyến nghị và giải pháp điều trị
            phù hợp nếu phát hiện bất kỳ vấn đề sức khỏe nào. Tại Petpals, chúng
            tôi không chỉ mang đến cho thú cưng của bạn những dịch vụ y tế hàng
            đầu, mà còn xây dựng mối quan hệ đáng tin cậy và gắn kết với chủ
            nuôi. Đội ngũ bác sĩ và nhân viên chuyên môn tận tâm, yêu động vật,
            sẽ luôn lắng nghe và tư vấn cho bạn về chăm sóc sức khỏe thú cưng
            một cách tốt nhất..
          </p>
          <p>
            Hãy đặt lịch hẹn ngay và đưa thú cưng của bạn đến chi nhánh Petpals
            gần nhất để trải qua dịch vụ Khám Sức Khỏe. Đảm bảo rằng thú cưng
            của bạn sẽ được kiểm tra một cách kỹ lưỡng và hưởng một cuộc sống
            khỏe mạnh, tràn đầy năng lượng.
          </p>
        </div>
      </section>
    </main>
  );
}
