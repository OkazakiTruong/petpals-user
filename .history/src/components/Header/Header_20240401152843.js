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
        <div className="wrap"></div>
      </div>
    </header>
  );
};
