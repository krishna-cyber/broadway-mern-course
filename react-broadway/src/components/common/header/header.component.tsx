import { NavLink } from "react-router-dom";
import logo_full from "./../../../../src/assets/images/logo/logo-full.png";
import {  Navbar } from "flowbite-react";
import { CiShoppingCart } from "react-icons/ci";
import { Badge } from "flowbite-react";
// import { useContext } from "react";
// import AuthContext from "../../../context/auth.context";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((state: any) => state.cart.items);
 
  
  const {loggedInUser} = useSelector((state: any) => state.user);
  // let {loggedInUser}:any = useContext(AuthContext);
  return (
    <Navbar fluid rounded className=" p-4 shadow-2xl sticky top-0 z-10">
      <Navbar.Brand href="#">
        <img
          src={logo_full}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Collapse>

          { loggedInUser?.role === "customer" && (
            // show cart icon only for customer
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "activeLink" : "text-gray-900"
              }
            >
             
                
              <CiShoppingCart className="text-2xl" />
              <Badge  className="relative bg-red-500 -top-8 -right-4 text-xs">
      {items.length}
        </Badge>
            </NavLink>
          )}
        
          {/* Navbar user profile and logout options  */}
          {loggedInUser && loggedInUser ? (<>  <NavLink
            className={({ isActive }) =>
              isActive ? "activeLink" : "text-gray-900"
            }
            to={`/${loggedInUser?.role}`}
          >
            {loggedInUser?.fullName}
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
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            isActive ? "activeLink" : "text-gray-900"
          }
        >
        Chat
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
