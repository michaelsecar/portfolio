import { Sidebar } from "../components/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="flex p-10 gap-6">
      <div className="w-16 sticky top-1/2 -translate-y-1/2 rounded-lg bg-dark h-96 hover:bg-opacity-100 bg-opacity-80 duration-200">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-6 w-fit">{children}</div>
    </div>
  );
};
