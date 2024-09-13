import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const RootLayout = () => {
  const { pathname } = useLocation();

  const isShow = pathname === "/Login" || pathname === "/Register";

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "HireNow - Home";
      return;
    }

    document.title = `HireNow - ${location.pathname
      .replaceAll("/", " - ")
      .replaceAll("-", " ")}`;
  }, [location]);

  return (
    <div>
      {/* navbar */}
      {isShow || <Navbar />}

      {/* main layout */}
      <main className="min-h-[calc(100vh-335px)]">
        <Outlet />
      </main>

      {/* footer */}
      {isShow || <Footer />}
    </div>
  );
};

export default RootLayout;
