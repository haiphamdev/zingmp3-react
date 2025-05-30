import icons from "./icons";

const { MdOutlineLibraryMusic, HiOutlineChartPie, MdOutlineFeed, TbChartArcs } =
  icons;

export const sidebarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "",
    text: "Khám phá",
    icons: <TbChartArcs size={24} />,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icons: <HiOutlineChartPie size={24} />,
  },
  {
    path: "folow",
    text: "theo dõi",
    icons: <MdOutlineFeed size={24} />,
  },
];
