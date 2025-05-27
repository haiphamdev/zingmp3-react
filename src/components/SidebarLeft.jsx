import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../utils/menu";

const notActiveStyle =
  "flex items-center font-bold text-[13px] text-[#484e52] py-3 px-[21px] gap-[12px]";
const activeStyle =
  "flex items-center font-bold text-[13px] text-[#2c706a] py-3 px-[21px] gap-[12px]";

const SidebarLeft = () => {
  return (
    <div className="flex flex-col bg-[#dce5e4]">
      <div className="py-[15px] px-[25px]">
        <img src={logo} alt="logo" className="w-[120px] h-10" />
      </div>
      <div className="flex flex-col">
        {sidebarMenu.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
            to={item.path}
          >
            {item.icons}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
