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
        <p>Spa-grooming</p>
      </div>
      <section className="service-section">
        <div className="section-heading">SPA-GROOMING</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/spa-grooming/spa-grooming-1.jpg" alt="" />
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
            Chúng tôi hiểu rằng cơ thể sạch sẽ là một phần quan trọng giúp bảo
            vệ sức khỏe của thú cưng. Quy trình Spa – Grooming chuyên nghiệp tại
            Petpals được đội ngũ chuyên viên giàu kinh nghiệm của chúng tôi là
            những người được đào tạo bài bản tại các trung tâm hàng đầu tại Hà
            Nội thực hiện. Họ không chỉ là những người yêu thú cưng mà còn là
            những chuyên gia trong việc chăm sóc và làm đẹp cho các bé.
          </p>
          <p>
            Từ việc vệ sinh, tắm gội, cắt tỉa lông đến làm móng, mỗi dịch vụ đều
            được thực hiện kỹ lưỡng với sự tận tâm và chuyên nghiệp. Chúng tôi
            cam kết sẽ mang lại cho thú cưng của bạn không chỉ là vẻ ngoài sạch
            sẽ, xinh xắn mà còn là tinh thần thư thái và hạnh phúc. Đến với
            Tropicpet, bạn sẽ hoàn toàn yên tâm và hài lòng với dịch vụ chăm sóc
            Spa – Grooming cao cấp dành cho thú cưng của bạn.
          </p>
          <p>
            Petpals cung cấp sẵn các gói combo spa, làm đẹp để khách hàng dễ
            dàng lựa chọn gói dịch vụ cho các bé cún miu nhà mình. Gói combo tắm
            làm sạch 8 bước, gói combo cạo tắm 9 bước, gói combo cắt tỉa 10
            bước. Tất cả đều sử dụng các sản phẩm sữa tắm, dưỡng lông chất lượng
            cao và an toàn, cùng với hệ thống máy sưởi, máy sấy và dụng cụ,
            thiết bị hỗ trợ chuyên dụng.
          </p>
          <p>
            Bên cạnh các gói combo có sẵn khách hàng có thể lựa chọn thêm các
            dịch vụ ngoài như: Tắm với sữa tắm nấm, sữa tắm trị rận, nhuộm lông,
            cạo lông không tắm…
          </p>
          <div className="table">
            <div className="row row-heading">
              <div style={{ width: "48px", height: "41px" }}>Stt</div>
              <div style={{ width: "505px", height: "41px" }}>Hạng mục</div>
              <div style={{ width: "196px", height: "41px" }}>
                Combo Tắm (200K)
              </div>
              <div style={{ width: "175px", height: "41px" }}>
                Combo Cạo Tắm (250k)
              </div>
              <div style={{ width: "175px", height: "41px" }}>
                Combo Cắt Tỉa (350K)
              </div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>1</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Đón tiếp, xin thông tin và tư vấn`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>2</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Kiểm tra sức khỏe lâm sàng`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>3</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Kiểm tra tầm soát ký sinh trùng đường tiêu hoá`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>4</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Siêu âm chuyên sâu ổ bụng (Tầm soát sức khoẻ các nội quan) `}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>5</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Xét nghiệm máu tổng quát (18 chỉ số sinh lý, các chỉ số chức năng gan thận)`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>6</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Tư vấn chế độ dinh dưỡng`}
              </div>
              <div style={{ width: "196px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>7</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Xét nghiệm bệnh truyền nhiễm`}
              </div>
              <div style={{ width: "196px", height: "41px" }}></div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>8</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Xét nghiệm ký sinh trùng đường máu và xét nghiệm tế bào học`}
              </div>
              <div style={{ width: "196px", height: "41px" }}></div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>9</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Chụp X – Quang (Xương khớp, xoang bụng, xoang ngực)`}
              </div>
              <div style={{ width: "196px", height: "41px" }}></div>
              <div style={{ width: "175px", height: "41px" }}></div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
            <div className="row">
              <div style={{ width: "48px", height: "41px" }}>10</div>
              <div style={{ width: "505px", height: "41px" }}>
                {`Xét nghiệm nước tiểu`}
              </div>
              <div style={{ width: "196px", height: "41px" }}></div>
              <div style={{ width: "175px", height: "41px" }}></div>
              <div style={{ width: "175px", height: "41px" }}>x</div>
            </div>
          </div>
          <p>
            Cùng với chuyên môn, kinh nghiệm của các bác sĩ tại Petpals là hệ
            thống máy móc thiết bị hỗ trợ hiện đại, đầu tư bài bản cho kết quả
            nhanh, hiệu quả, chính xác. Các gói khám từ cơ bản đến chuyên sâu
            chúng tôi cung cấp bên trên sẽ giúp kiểm tra và đánh giá 
          </p>
          <div>
            <ul>
              <li>
                <b>Khám tổng quát:</b> Đo cân nặng, đo huyết áp, đo nhiệt độ,
                kiểm tra lông, da, tai, mắt, mũi, họng…
              </li>
              <li>
                <b>Siêu âm:</b> Kiểm tra tim, ổ bụng, gan, thận bằng phương pháp
                siêu âm.
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
