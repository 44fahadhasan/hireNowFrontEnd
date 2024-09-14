import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button";
import SiteLogo from "../../components/SiteLogo";

const lists = [{ path: "/", label: "Home" }];

const Navbar = () => {
  const [toggleMenuIcon, setToggleMenuIcon] = useState(true);

  const user = !true;

  const handelToggleMenu = () => {
    setToggleMenuIcon(!toggleMenuIcon);
  };

  const userProfile = (
    <div
      className="tooltip tooltip-left"
      data-tip={user?.displayName || "Name availablen't"}
    >
      <div className="w-10 rounded-full">
        <img
          className="object-cover cursor-pointer"
          alt="Profile"
          src={
            user?.photoURL ||
            "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
          }
        />
      </div>
    </div>
  );

  const userToggle = (
    <div>
      {user ? (
        <button
          onClick={() => {
            handleLogOut();
            setToggleMenuIcon(!toggleMenuIcon);
          }}
        >
          <Button lebel={"Logout"} />
        </button>
      ) : (
        <Link to="/Login" onClick={() => setToggleMenuIcon(!toggleMenuIcon)}>
          <Button lebel={"Login"} />
        </Link>
      )}
    </div>
  );

  return (
    <>
      <div className="poppins  bg-base-100 flex justify-between items-center py-5 w-[95%] lg:w-auto  mx-auto container ">
        {/* logo */}
        <SiteLogo />

        {/* menu for large device */}
        <div className="hidden md:block text-center">
          <ul className="flex gap-7 font-medium text-lg ">
            {lists?.map(({ path, label }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-secondary"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* login & logout button for large device */}
        <div className="hidden md:flex items-center space-x-4 ">
          {user && userProfile}
          {userToggle}
        </div>

        {/* menu icon for mobile device */}
        <div className="md:hidden text-2xl text-primary hover:text-secondary">
          {toggleMenuIcon ? (
            <AiOutlineMenu onClick={handelToggleMenu} title="show menu" />
          ) : (
            <AiOutlineClose onClick={handelToggleMenu} title="close menu" />
          )}
        </div>
      </div>

      {/* mobile device */}
      <div
        className={`md:hidden absolute w-full mx-auto h-min bg-base-100 py-6 font-medium z-[900] border-y-2 border-base-200 ${
          toggleMenuIcon && "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 text-center">
          {lists?.map(({ path, label }) => (
            <li key={label}>
              <NavLink
                onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* login & logout button for small device */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-9">
          {user && userProfile}
          {userToggle}
        </div>
      </div>
    </>
  );
};

export default Navbar;
