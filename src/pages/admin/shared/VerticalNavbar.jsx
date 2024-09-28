import { FaUsers } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { MdDashboardCustomize, MdOutlinePostAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

const dahsBoardLists = [
  { path: "/Dashboard", label: "Dashboard", icon: <MdDashboardCustomize /> },
  { path: "/Dashboard/Users", label: "Users", icon: <FaUsers /> },
  {
    path: "/Dashboard/Job-Listings",
    label: "Job Listings",
    icon: <MdOutlinePostAdd />,
  },
  {
    path: "/Dashboard/Applications",
    label: "Applications",
    icon: <IoDocumentSharp />,
  },
];

const VerticalNavbar = () => {
  return (
    <nav className="mt-10">
      {dahsBoardLists?.map(({ path, label, icon }) => (
        <li key={label} className="text-[#36454e] list-none">
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-white flex items-center px-6 py-2 mt-4 bg-[#0094D5]"
                : "flex items-center px-6 py-2 mt-4 hover:bg-[#0094D5] hover:text-white transition-all duration-300"
            }
          >
            <span className="text-2xl">{icon}</span>
            <span className="mx-3">{label}</span>
          </NavLink>
        </li>
      ))}
    </nav>
  );
};

export default VerticalNavbar;
