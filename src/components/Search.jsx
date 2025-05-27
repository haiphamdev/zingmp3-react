import icons from "../utils/icons";

const { FiSearch } = icons;

const Search = () => {
  return (
    <div className="w-full flex items-center">
      <span className="bg-[#dde4e4] rounded-l-[20px] pl-4 py-2 cursor-pointer text-gray-500">
        <FiSearch size={24} />
      </span>
      <input
        type="text"
        className="outline-none w-full bg-[#dde4e4] rounded-r-[20px] h-10 px-4 py-2 text-gray-500"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
};

export default Search;
