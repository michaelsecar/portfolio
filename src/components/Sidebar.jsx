import { DownloadIcon } from "../icons/DownloadIcon";
import { ProfileIcon } from "../icons/ProfileIcon";

const SideItem = ({ Icon, action }) => {
  return (
    <button className="flex flex-col items-center justify-center hover:bg-primary rounded-lg p-2 text-primary hover:text-dark duration-200">
      <div>{Icon}</div>
    </button>
  );
};

export const Sidebar = () => {
  return (
    <ul className="flex flex-col justify-center items-center h-full gap-5 bg-opacity-80">
      <li>
        <SideItem Icon={<ProfileIcon />} />
      </li>
      <li>
        <SideItem Icon={<DownloadIcon />} />
      </li>
      <li>
        <SideItem Icon={<DownloadIcon />} />
      </li>
      <li>
        <SideItem Icon={<DownloadIcon />} />
      </li>
    </ul>
  );
};
