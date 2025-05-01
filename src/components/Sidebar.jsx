import { DownloadIcon } from "../icons/DownloadIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { HammerIcon } from "../icons/HammerIcon";
import { PaperIcon } from "../icons/PaperIcon";

const SideItem = ({ Icon, action }) => {
  return (
    <button className="flex flex-col items-center justify-center hover:bg-primary rounded-lg p-2 text-primary hover:text-dark duration-200">
      <div>{Icon}</div>
    </button>
  );
};

export const Sidebar = () => {
  return (
    <ul className="flex flex-col justify-center items-center h-full gap-5 bg-opacity-80 border border-primary rounded-lg">
      <li>
        <SideItem Icon={<ProfileIcon />} />
      </li>
      <li>
        <SideItem Icon={<HammerIcon />} />
      </li>
      <li>
        <SideItem Icon={<PaperIcon />} />
      </li>
      <li>
        <SideItem Icon={<DownloadIcon />} />
      </li>
    </ul>
  );
};
