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
        <p>Phẫu thuật ngoại khoa</p>
      </div>
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ PHẪU THUẬT NGOẠI KHOA</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/service-img/phau-thuat-ngoai-khoa.jpg" alt="" />
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
            Tại Petpals, chúng tôi hiểu rằng các vấn đề phẫu thuật đòi hỏi sự
            chuyên môn và kỹ năng cao. Với đội ngũ bác sĩ thú y giàu kinh nghiệm
            và trang bị hiện đại, chúng tôi tự hào cung cấp dịch vụ phẫu thuật
            chuyên khoa đa dạng để giúp thú cưng của bạn vượt qua các vấn đề sức
            khỏe.
          </p>
          <p>
            <b>Dịch vụ phẫu thuật của chúng tôi bao gồm:</b>
          </p>

          <div>
            <ul>
              <li>
                <b>Phẫu thuật đỡ đẻ, mổ đẻ cho chó mèo:</b> Phẫu thuật này là
                một quá trình phổ biến và được thực hiện khi thú cưng của bạn
                gặp vấn đề về sinh đẻ. Các trường hợp bao gồm khó sinh, không
                thể sinh con do vấn đề tử cung, sức rặn yếu, con quá lớn, dị tật
                bộ phận sinh dục, ngôi thai không đúng vị trí,  khi chủ nuôi
                muốn điều chỉnh thời gian sinh con của thú cưng hoặc không muốn
                thú cưng sinh tự nhiên.
              </li>
              <li>
                <b>Phẫu thuật sa trực tràng:</b> Là quá trình loại bỏ một phần
                của thực tràng để đảm bảo sức khỏe cho vật nuôi. Qua các nguyên
                nhân như táo bón mãn tính, rặn đẻ kéo dài, tác động của thuốc
                liều cao, viêm ruột, viêm trực tràng, cơ nâng hậu môn yếu, và sự
                thiếu nước trong cơ thể, phẫu thuật giảm thực tràng giúp giảm
                đau đớn và cải thiện chất lượng cuộc sống của vật nuôi.
              </li>
              <li>
                <b>Phẫu thuật nối ruột, tháo ruột:</b> Được thực hiện khi vật
                nuôi gặp các tổn thương ruột như lòi ruột do cắn nhau, xoắn
                ruột, hoặc tổn thương ruột cần phải được nối lại. Qua quá trình
                mổ bụng, các bác sĩ sẽ tìm ra phần ruột bị tổn thương hoặc rách,
                sau đó thực hiện việc nối lại đoạn ruột hoặc sắp xếp lại các
                đoạn ruột bị xoắn để khôi phục sức khỏe cho vật nuôi.
              </li>
              <li>
                <b>Phẫu thuật cắt mống mắt:</b> Chó mèo gặp vấn đề về mống mắt,
                mắt bị đau rát hoặc khó chịu, mắt có hiện tượng đau, đỏ và bị
                cộm cục thịt ở dưới mi mắt, khiến chúng chậm lớn, rầu rĩ, chán
                chơi… Bạn nên quan sát và mang thú cưng đến phòng khám thú y để
                cắt mống mắt đó.
              </li>
              <li>
                <b>Phẫu thuật triệt sản:</b> Là quá trình cắt bỏ bộ phận sinh
                dục để ngăn chặn khả năng sinh sản. Bằng cách loại bỏ tử cung và
                buồng trứng ở con cái hoặc tinh hoàn ở con đực, phẫu thuật triệt
                sản giúp ngăn chặn chó mèo có thể sinh con. 
              </li>
              <li>
                <b>`Phẫu thuật mổ Hernie:`</b>
                {` Đây là hiện tượng chó mèo bị sa ruột (thoát vị rốn) do bị di tật bẩm sinh, do cắt rốn không đúng kỹ thuật, khi đó rốn có một lỗ nhỏ không được đóng kín, các nội tạng trong bụng theo lỗ này thoát ra ngoài. Ban đầu tại rốn chỉ là một cục thịt nhỏ cỡ ngón tay nhô lên, càng lâu nó càng to lên và gây nguy hiểm cho vật nuôi. Phẫu thuật mổ Hernie là cắt bỏ cục u khi còn nhỏ. Tuy vậy hiện tượng này rất dễ bị tái lại.  Đây là hiện tượng chó mèo bị sa ruột (thoát vị rốn) do bị di tật bẩm sinh, do cắt rốn không đúng kỹ thuật, khi đó rốn có một lỗ nhỏ không được đóng kín, các nội tạng trong bụng theo lỗ này thoát ra ngoài. Ban đầu tại rốn chỉ là một cục thịt nhỏ cỡ ngón tay nhô lên, càng lâu nó càng to lên và gây nguy hiểm cho vật nuôi. Phẫu thuật mổ Hernie là cắt bỏ cục u khi còn nhỏ. Tuy vậy hiện tượng này rất dễ bị tái lại.`}
              </li>
              <li>
                <b>Phẫu thuật triệt sản:</b> Là quá trình cắt bỏ bộ phận sinh
                dục để ngăn chặn khả năng sinh sản. Bằng cách loại bỏ tử cung và
                buồng trứng ở con cái hoặc tinh hoàn ở con đực, phẫu thuật triệt
                sản giúp ngăn chặn chó mèo có thể sinh con. 
              </li>
              <li>
                <b>Phẫu thuật triệt sản:</b> Là quá trình cắt bỏ bộ phận sinh
                dục để ngăn chặn khả năng sinh sản. Bằng cách loại bỏ tử cung và
                buồng trứng ở con cái hoặc tinh hoàn ở con đực, phẫu thuật triệt
                sản giúp ngăn chặn chó mèo có thể sinh con. 
              </li>
              <li>
                <b>Phẫu thuật triệt sản:</b> Là quá trình cắt bỏ bộ phận sinh
                dục để ngăn chặn khả năng sinh sản. Bằng cách loại bỏ tử cung và
                buồng trứng ở con cái hoặc tinh hoàn ở con đực, phẫu thuật triệt
                sản giúp ngăn chặn chó mèo có thể sinh con. 
              </li>
              <li>
                <b>Phẫu thuật triệt sản:</b> Là quá trình cắt bỏ bộ phận sinh
                dục để ngăn chặn khả năng sinh sản. Bằng cách loại bỏ tử cung và
                buồng trứng ở con cái hoặc tinh hoàn ở con đực, phẫu thuật triệt
                sản giúp ngăn chặn chó mèo có thể sinh con. 
              </li>
            </ul>
          </div>
          <p>
            Tại Petpals, chúng tôi đặt sự an toàn và chăm sóc tối đa cho thú
            cưng lên hàng đầu. Với đội ngũ bác sĩ thú y giàu kinh nghiệm và nhân
            viên chăm sóc đáng tin cậy, chúng tôi đảm bảo quá trình phẫu thuật
            được tiến hành một cách cẩn thận và chuyên nghiệp. Chúng tôi nhận
            thức rằng đôi khi thú cưng của bạn cần đến các phẫu thuật chuyên
            khoa để khắc phục vấn đề sức khỏe. Vì vậy, bạn có thể yên tâm, tại
            Petpals, chúng tôi cam kết thú cưng của bạn sẽ được phẫu thuật trong
            những trường hợp cần thiết, với sự chuyên nghiệp và tận tâm.
          </p>
          <p>
            Hãy liên hệ ngay với chúng tôi để biết thêm thông tin về dịch vụ
            phẫu thuật chuyên khoa và đặt lịch hẹn cho thú cưng của bạn. Petpals
            – Nơi chăm sóc đáng tin cậy cho sức khỏe thú cưng!
          </p>
        </div>
      </section>
    </main>
  );
}
