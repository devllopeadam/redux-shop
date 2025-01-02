import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";

const Layout = () => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
