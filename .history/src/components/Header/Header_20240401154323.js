import "./style.scss";
import { Socialicon } from "../Socialicon/Socialicon";
export const Header = () => {
  return (
    <header>
      <div>
        <div className="wrap top-header">
          <p>Petpals - Hệ thống chăm sóc thú y đẳng cấp</p>
          <div className="social-connect">
            <p>Ghé thăm chúng tôi tại</p>
            <Socialicon />
          </div>
        </div>
      </div>
      <div>
        <div className="wrap">
          <a className="petpals-logo">
            <img src="/img/logo_duongb.png" alt="logo-petpals" />
          </a>
          <div className="search-input">
            <input type="text" placeholder="Nhập để tìm kiếm" />
            <div>
              <img src="/icon/mingcute_search-line.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
