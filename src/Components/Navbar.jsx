import { useContext, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 bg-white py-3 flex items-center justify-between rounded-b-lg h-[60px]">
      <div className="flex items-center">
      <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#FF5E6C] to-[#FD267D] bg-clip-text text-transparent">
                  EarthForge
                </span>
              </div>
      </div>

      <ul className="items-center gap-[20px] text-[0.900rem] text-[#424242] lg:flex hidden">
        <NavLink to="/">
          <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            home
          </li>
        </NavLink>
        <NavLink to="/Marathons">
          <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            Marathons
          </li>
        </NavLink>
        {
          user?.email &&   <NavLink to="/Dashboard">
          <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            Dashboard
          </li>
        </NavLink>
        }
      </ul>

      {user?.email ? (
      <div className="flex gap-6">
         <img className="w-10 h-10 rounded-full" src={user?.email && user.photoURL} alt="" />

          <button onClick={logOut} className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#FF5E6C] text-white hover:bg-[#FD267D] transition-all duration-300 sm:flex hidden">
          LogOut
         </button>
      </div>
      ) : (
        <div className="flex items-center gap-[10px]">
          <Link to="/login">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#FF5E6C] transition-all duration-300 sm:flex hidden">
              Sign in
            </button>
          </Link>
          <Link to="/signUp">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#FF5E6C] text-white hover:bg-[#FD267D] transition-all duration-300 sm:flex hidden">
              Sign up
            </button>
          </Link>
        </div>
      )}

      {mobileSidebarOpen ? (
        <AiOutlineClose
          className="text-[1.8rem] text-[#424242] cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(false)}
        />
      ) : (
        <CiMenuFries
          className="text-[1.8rem] text-[#424242] cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(true)}
        />
      )}

      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "-translate-x-full opacity-0 z-[-1]"
        } lg:hidden bg-white p-4 text-center fixed top-0 left-0 h-full w-3/4 max-w-[300px] transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[0.900rem] text-gray-600 flex flex-col mt-16">
          <NavLink to="/" onClick={() => setMobileSidebarOpen(false)}>
            <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              home
            </li>
          </NavLink>
          <NavLink to="/Marathons">
          <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            Marathons
          </li>
        </NavLink>
        {
          user?.email &&   <NavLink to="/Dashboard">
          <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            Dashboard
          </li>
        </NavLink>
        }
          {/* <NavLink to="/" onClick={() => setMobileSidebarOpen(false)}>
            <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] transition-all duration-300 before:left-0 cursor-pointer capitalize"></li>
          </NavLink> */}
          {/* <NavLink
            to="/myDonations"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              My Donations
            </li>
          </NavLink> */}
          <NavLink to="/login" onClick={() => setMobileSidebarOpen(false)}>
            <li className="before:w-0 hover:before:w-full before:bg-[#FF5E6C] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF5E6C] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Login
            </li>
          </NavLink>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
