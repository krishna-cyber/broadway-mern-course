import { NavLink } from "react-router-dom";
import logo_full from "./../../../../src/assets/images/logo/logo-full.png";
import {  Navbar } from "flowbite-react";
import { useContext } from "react";
import AuthContext from "../../../context/auth.context";

const Header = () => {
  let {loggedInUser}:any = useContext(AuthContext);
  return (
    <Navbar fluid rounded className=" p-4 shadow-2xl">
      <Navbar.Brand href="#">
        <img
          src={logo_full}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Collapse>
        
          {/* Navbar user profile and logout options  */}
          {loggedInUser && loggedInUser ? (<>  <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-gray-900"
            }
            to={`/${loggedInUser?.role}/dashboard`}
          >
            {loggedInUser?.name}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-gray-900"
            }
            to={"/login"}
          >
            Logout
          </NavLink></>):(<>  <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-gray-900"
            }
            to={"/register"}
          >
            Register
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-gray-900"
            }
            to={"/login"}
          >
            Login
          </NavLink></>) }
        </Navbar.Collapse>
        {/* <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img={logo} rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeLink" : "text-gray-900"
          }
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeLink" : "text-gray-900"
          }
          to="/categories"
        >
          Categories
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeLink" : "text-gray-900"
          }
          to="/products"
        >
          All products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeLink" : "text-gray-900"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
