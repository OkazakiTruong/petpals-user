import "./style.scss";
import { Socialicon } from "../Socialicon/Socialicon";
export const Header = () => {
  return (
    <header>
      <div>
        <div className="wrap">
          <p>Petpals - Hệ thống chăm sóc thú y đẳng cấp</p>
          <div>
            <p>Ghé thăm chúng tôi tại</p>
            <Socialicon />
          </div>
        </div>
      </div>
    </header>
  );
};
