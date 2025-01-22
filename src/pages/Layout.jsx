import { div } from "framer-motion/client";
import { Sidebar } from "../components/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="h-screen sticky top-0 p-5">
        <div className="w-16 rounded-lg bg-dark bg-opacity-80 duration-200 h-full">
          <Sidebar />
        </div>
      </div>
      <div className="flex py-5">
        <div className="flex flex-col gap-6 w-fit">{children}</div>
      </div>
    </div>
  );
};
