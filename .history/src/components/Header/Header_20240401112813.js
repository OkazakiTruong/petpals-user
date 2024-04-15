import "./style.scss";
import { Socialicon } from "../Socialicon/Socialicon";
export const Header = () => {
  return (
    <header>
      <div>
        <div className="wrap">
          <p>Petpals - Hệ thống chăm sóc thú y đẳng cấp</p>
          <div>
            <Socialicon />
          </div>
        </div>
      </div>
    </header>
  );
};
