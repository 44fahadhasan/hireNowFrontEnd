import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Dashboard/header";
import Main from "../components/Dashboard/Main";
import SiteLogo from "../components/SiteLogo";
import VerticalNavbar from "../pages/admin/shared/VerticalNavbar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Dashboard") {
      document.title = "Dashboard - Home";
      return;
    }
    document.title = `${location.pathname
      .replaceAll("/", " - ")
      .replaceAll("-", " ")}`;
  }, [location]);

  return (
    <div className="flex h-screen bg-gray-200">
      {/* show transparent overlay for small device when active drawer vertical nav */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`${
          sidebarOpen ? "block" : "hidden"
        } fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`}
      ></div>

      {/* dashboard left side vertical navbar area */}
      <div
        className={`${
          sidebarOpen ? "" : "hidden"
        } fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0 translate-x-0 ease-out'  '-translate-x-full ease-in`}
      >
        {/* website logo */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <SiteLogo />
          </div>
        </div>

        {/* vertical nav */}
        <VerticalNavbar />
      </div>

      {/* main dashboard area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* nav header top */}
        <Header setSidebarOpen={setSidebarOpen} />

        {/* dashboard main (outlate) */}
        <Main />
      </div>
    </div>
  );
};

export default DashboardLayout;
