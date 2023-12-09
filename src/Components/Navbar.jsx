import { Link, NavLink } from "react-router-dom";
import logo from "/lg2.png";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const { user, logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
      .then(() => {
      console.log("Log out Successfully")
      })
      .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <nav className="flex flex-col md:flex-row md:items-center justify-between p-2 bg-teal-50 dark:bg-slate-500 shadow-md ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <div
              onClick={handleMenu}
              className="toggle-menu  md:hidden  text-3xl"
            >
              {menu ? (
                <RxCross2 className="text-teal-500 "></RxCross2>
              ) : (
                <RiMenuUnfoldLine className="text-teal-700"></RiMenuUnfoldLine>
              )}
            </div>
            <div className="logo">
              <img className=" w-[10rem] " src={logo} alt="" />
            </div>
          </div>

          <div className="left-btn md:hidden text-sm">
            {user ? (
              <div>
                <span className="hidden"> {user.email} </span>{" "}
                <Link
                  onClick={handleLogout}
                  to={"/"}
                  className="border-[.09rem] border-teal-600 px-3 py-1 rounded-md hover:bg-teal-500 "
                >
                  Log Out
                </Link>
              </div>
            ) : (
              <Link
                to={"/login"}
                className="border-[.09rem] border-teal-600 px-3 py-1 rounded-md hover:bg-teal-500 "
              >
                {`Let's talk`}
              </Link>
            )}
          </div>
        </div>

        <ul
          className={`z-50 flex flex-col md:flex-row md:items-center justify-center text-sm bg-teal-500 md:bg-transparent p-2 md:p-0 rounded-md gap-y-1 absolute md:static duration-500  ${
            menu ? "top-14" : "-top-48"
          } `}
        >
          <li>
            <NavLink
              to={"/"}
              className="focus:bg-teal-500 py-1 px-4 rounded-md dark:text-gray-300 text-lg"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/myCart"}
              className="focus:bg-teal-500 py-1 px-4 rounded-md dark:text-gray-300 text-lg"
            >
              My Cart
            </NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink
                  to={"/addProduct"}
                  className="focus:bg-teal-500 py-1 px-4 rounded-md dark:text-gray-300 text-lg"
                >
                  Add Product
                </NavLink>
              </li>
              <li className="md:hidden">
                <Link to={"/"}> {user.email} </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={"/login"}
                  className="focus:bg-teal-500 py-1 px-4 rounded-md dark:text-gray-300 text-lg"
                >
                  Log in
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/registration"}
                  className="focus:bg-teal-500 py-1 px-4 rounded-md dark:text-gray-300 text-lg "
                >
                  Registration
                </NavLink>
              </li>
            </>
          )}
          <li>
            <button
              onClick={handleTheme}
              className="py-1 px-4 rounded-md dark:text-gray-300 text-lg"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </li>
        </ul>

        <div className="left-btn hidden md:block text-sm ">
          {user ? (
            <div className="flex items-center justify-center gap-1">
              <span className="dark:text-gray-300"> {user.email} </span>
              <img
                className="h-[2rem] w-[2rem] rounded-full "
                src={user.photoURL}
                alt=""
              />

              <Link
                onClick={handleLogout}
                to={"/"}
                className="border-[.09rem] border-teal-600 px-3 py-1 rounded-md hover:bg-teal-500 dark:text-gray-300 text-lg "
              >
                Log Out
              </Link>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="border-[.09rem] border-teal-600 px-3 py-1 rounded-md hover:bg-teal-500 dark:text-gray-300 text-lg "
            >
              {`Let's talk`}
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;