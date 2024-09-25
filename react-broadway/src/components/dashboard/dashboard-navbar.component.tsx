import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { HiBell, HiCurrencyDollar, HiLogout } from "react-icons/hi";
import logo from "../../assets/images/logo/logo-only.png";
import { useContext, useState } from "react";
import {
  HiCircleStack,
  HiSquaresPlus,
} from "react-icons/hi2";
// import AuthContext from "../../context/auth.context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/reducer/user.reducer";
import { useNavigate } from "react-router-dom";

export const DashboardNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { loggedInUser } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {

    dispatch(logOutUser("logout"));
  }

  return (
    <Navbar
      fluid
      rounded
      className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50"
    >
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Broadway logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Broadway E-commerce
        </span>
        <Navbar.Toggle
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        />
      </Navbar.Brand>

      <div className="flex gap-4 md:order-2">
     

        {/* profile dropdown avatar */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            loggedInUser?.profile ? (
              <>
                <Avatar
                  alt="User settings"
                  img={loggedInUser?.profile}
                  rounded
                />
              </>
            ) : (
              <>
                <Avatar alt="User settings" rounded />
              </>
            )
          }
        >
          <Dropdown.Header>
            <span className="block font-semibold text-sm">{loggedInUser?.fullName}</span>
            <span className="block truncate text-sm font-medium">
             {loggedInUser?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item icon={HiSquaresPlus}>Dashboard</Dropdown.Item>
          <Dropdown.Item icon={HiCircleStack}>Settings</Dropdown.Item>
          <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={()=>dispatch(logOutUser('logout'))} icon={HiLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
    
  );
};





