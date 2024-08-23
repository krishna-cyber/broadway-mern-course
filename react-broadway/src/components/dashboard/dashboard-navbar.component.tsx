import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { HiBell, HiCurrencyDollar, HiLogout } from "react-icons/hi";
import logo from "../../assets/images/logo/logo-only.png";
import { useContext, useState } from "react";
import {
  HiCircleStack,
  HiSquare3Stack3D,
  HiSquaresPlus,
} from "react-icons/hi2";
// import AuthContext from "../../context/auth.context";
import { useSelector } from "react-redux";

export const AdminDashboardNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const {loggedInUser}:any = useContext(AuthContext);
  const { loggedInUser } = useSelector((state: any) => state.user);
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
        {/* notification dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          label={<HiBell className=" h-8 w-8 text-slate-500" />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        {/* dashboard option dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          label={<HiSquare3Stack3D className=" w-8 h-8 text-slate-500" />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        {/* profile dropdown avatar */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            loggedInUser?.profile ? (
              <>
                <Avatar
                  alt="User settings"
                  img={loggedInUser.profile}
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
            <span className="block font-semibold text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item icon={HiSquaresPlus}>Dashboard</Dropdown.Item>
          <Dropdown.Item icon={HiCircleStack}>Settings</Dropdown.Item>
          <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
    
  );
};

export const SellerDashboardNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const {loggedInUser}:any = useContext(AuthContext);
  const { loggedInUser } = useSelector((state: any) => state.user);
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
        {/* notification dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          label={<HiBell className=" h-8 w-8 text-slate-500" />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        {/* dashboard option dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          label={<HiSquare3Stack3D className=" w-8 h-8 text-slate-500" />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        {/* profile dropdown avatar */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            loggedInUser?.profile ? (
              <>
                <Avatar
                  alt="User settings"
                  img={loggedInUser.profile}
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
            <span className="block font-semibold text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item icon={HiSquaresPlus}>Dashboard</Dropdown.Item>
          <Dropdown.Item icon={HiCircleStack}>Settings</Dropdown.Item>
          <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
    
  );
};



