import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/Button";
import SiteLogo from "../../components/SiteLogo";
import useAuth from "../../hooks/useAuth";
import useUserProfile from "../../hooks/useUserProfile";

const publicLists = [{ path: "/", label: "Home" }];

const jobSeekerLists = [
  { path: "/My-Applications", label: "My Applications" },
  { path: "/Resume", label: "Resume" },
];

const employerLists = [
  { path: "/Job-Post", label: "Job Post" },
  { path: "/Buy-Post", label: "Buy Post" },
];

const employerProfileNavLists = [
  { path: "/Posted-Jobs", label: "Posted Jobs" },
  { path: "/Applicant-Applications", label: "Applicant Applications" },
];

const adminLists = [{ path: "/Dashboard", label: "Dashboard" }];

const Navbar = () => {
  const [toggleMenuIcon, setToggleMenuIcon] = useState(true);

  const { user, userLogOut } = useAuth();
  const { userProfile: useInfo } = useUserProfile();

  const handelToggleMenu = () => {
    setToggleMenuIcon(!toggleMenuIcon);
  };

  // handle user logout
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("successfully Logout");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  const userToggle = (
    <div>
      {user ? (
        <div className="dropdown dropdown-end">
          {/* user img */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                className="object-cover"
                alt="user img"
                referrerPolicy="no-referrer"
                src={
                  user?.photoURL ??
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>
          </div>

          {/* profile nav */}
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium text-base"
          >
            {/* job seeker profile menu list */}
            {useInfo?.role === "jobSeeker" && (
              <>
                {jobSeekerLists?.map(({ path, label }) => (
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
              </>
            )}

            {/* imployer profile menu list */}
            {useInfo?.role === "employer" && (
              <>
                {employerProfileNavLists?.map(({ path, label }) => (
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
              </>
            )}

            {/* logout button */}
            <li>
              <button
                onClick={() => {
                  handleLogOut();
                  setToggleMenuIcon(!toggleMenuIcon);
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        // login button
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
            {publicLists?.map(({ path, label }) => (
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

            {/* employer menu list */}
            {useInfo?.role === "employer" && (
              <>
                {employerLists?.map(({ path, label }) => (
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
              </>
            )}

            {/* admin menu list */}
            {useInfo?.role === "admin" && (
              <>
                {adminLists?.map(({ path, label }) => (
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
              </>
            )}
          </ul>
        </div>

        {/* login & logout button for large device */}
        <div className="hidden md:flex items-center space-x-4 ">
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
          {publicLists?.map(({ path, label }) => (
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

          {useInfo?.role === "jobSeeker" && (
            <>
              {jobSeekerLists?.map(({ path, label }) => (
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
            </>
          )}

          {useInfo?.role === "employer" && (
            <>
              {employerLists?.map(({ path, label }) => (
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
            </>
          )}
        </ul>

        {/* login & logout button for small device */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-9">
          {userToggle}
        </div>
      </div>
    </>
  );
};

export default Navbar;
