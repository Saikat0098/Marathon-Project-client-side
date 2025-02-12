import { useContext, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Sun, Moon } from "lucide-react";
import ToggleTheme from "./ToggleTheme";
import ThemeToggle from "./ToggleTheme";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  // const [isDark, setIsDark] = useState(
  //   localStorage.getItem("theme") === "dark"
  // );
  const { user, logOut } = useContext(AuthContext);

  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  //   if (!isDark) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 bg-white dark:bg-gray-900 py-3 flex items-center justify-between h-[60px] transition-colors duration-300">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] dark:from-[#FD267D] dark:to-[#FF5E6C] bg-clip-text text-transparent">
            EarthForge
          </span>
        </div>
      </div>

      <ul className="items-center gap-[20px] text-[0.900rem] text-[#424242] dark:text-gray-300 lg:flex hidden">
        <NavLink to="/">
          <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] dark:before:bg-[#FD267D] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] dark:hover:text-[#FD267D] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            home
          </li>
        </NavLink>
        <NavLink to="/Marathons">
          <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] dark:before:bg-[#FD267D] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] dark:hover:text-[#FD267D] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            Marathons
          </li>
        </NavLink>
        {user?.email && (
          <NavLink to="/Dashboard">
            <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] dark:before:bg-[#FD267D] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] dark:hover:text-[#FD267D] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Dashboard
            </li>
          </NavLink>
        )}
      </ul>

      {user?.email ? (
        <div className="flex items-center gap-6">
           <ThemeToggle></ThemeToggle>
          <img
            className="w-10 h-10 rounded-full"
            src={user?.email && user.photoURL}
            alt=""
          />
          <button
            onClick={logOut}
            className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#FF5E6C] dark:bg-[#FD267D] text-white hover:bg-[#FD267D] dark:hover:bg-[#FF5E6C] transition-all duration-300 sm:flex hidden"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-[10px]">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
          <Link to="/login">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#FF5E6C] dark:hover:text-[#FD267D] transition-all duration-300 sm:flex hidden">
              Sign in
            </button>
          </Link>
          <Link to="/signUp">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#FF5E6C] dark:bg-[#FD267D] text-white hover:bg-[#FD267D] dark:hover:bg-[#FF5E6C] transition-all duration-300 sm:flex hidden">
              Sign up
            </button>
          </Link>
        </div>
      )}

      {mobileSidebarOpen ? (
        <AiOutlineClose
          className="text-[1.8rem] text-[#424242] dark:text-gray-300 cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(false)}
        />
      ) : (
        <CiMenuFries
          className="text-[1.8rem] text-[#424242] dark:text-gray-300 cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(true)}
        />
      )}

      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "-translate-x-full opacity-0 z-[-1]"
        } lg:hidden bg-white dark:bg-gray-900 p-4 text-center fixed top-0 left-0 h-full w-3/4 max-w-[300px] transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[0.900rem] text-gray-600 dark:text-gray-300 flex flex-col mt-16">
          <NavLink to="/" onClick={() => setMobileSidebarOpen(false)}>
            <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] dark:before:bg-[#FD267D] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] dark:hover:text-[#FD267D] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              home
            </li>
          </NavLink>
          <NavLink to="/Marathons">
            <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] dark:before:bg-[#FD267D] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] dark:hover:text-[#FD267D] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Marathons
            </li>
          </NavLink>
          {user?.email && (
            <NavLink to="/Dashboard">
              <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] dark:before:bg-[#FD267D] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] dark:hover:text-[#FD267D] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                Dashboard
              </li>
            </NavLink>
          )}

          {user?.email ? (
            <button
              onClick={logOut}
              className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#FF5E6C] dark:bg-[#FD267D] text-white hover:bg-[#FD267D] dark:hover:bg-[#FF5E6C] transition-all duration-300"
            >
              LogOut
            </button>
          ) : (
            <NavLink to="/login" onClick={() => setMobileSidebarOpen(false)}>
              <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] dark:before:bg-[#FD267D] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] dark:hover:text-[#FD267D] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                Login
              </li>
            </NavLink>
          )}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;