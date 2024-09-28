import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <Outlet />
    </main>
  );
};

export default Main;
