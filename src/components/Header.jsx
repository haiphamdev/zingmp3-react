import icons from "../utils/icons";
import Search from "./Search";

const { HiArrowNarrowLeft, HiOutlineArrowSmRight } = icons;

const Header = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-6 items-center w-full">
        <div className="flex text-gray-400 gap-8">
          <HiArrowNarrowLeft size={24} />
          <HiOutlineArrowSmRight size={24} />
        </div>
        <div className="w-1/2">
          <Search />
        </div>
      </div>
      <div>login</div>
    </div>
  );
};

export default Header;
