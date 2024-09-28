import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="lg:hidden flex items-center justify-between px-6 py-4 bg-white border-b-4 border-primary">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-500 text-2xl focus:outline-none lg:hidden"
        >
          <HiOutlineMenuAlt2 />
        </button>
      </div>
    </header>
  );
};

export default Header;
