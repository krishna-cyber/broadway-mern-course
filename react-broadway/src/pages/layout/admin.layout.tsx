import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

import {  Outlet } from "react-router-dom";
import AdminDashboardNavbar from "../../components/dashboard/dashboard-navbar.component";
import DashboardSidebar from "../../components/dashboard/admin-dashboard-sidebar.component";

export const AdminDashboardLayout = () => {
  const sideBarMenuLinks = [
    {
      menu: "Home",
      icon: HiArrowSmRight,
      link: "/",
    },
    {
      menu: "Dashboard",
      icon: HiChartPie,
      link: "/admin",
    },
    {
      menu: "Banner Management",
      icon: HiViewBoards,
      link: "/admin/banner-lists",
    },
    {
      menu: "Category Management",
      icon: HiInbox,
      link: "/admin/category-lists",
    },
    {
      menu: "Product Management",
      icon: HiShoppingBag,
      link: "/admin/product-lists",
    },
    {
      menu: "User Management",
      icon: HiUser,
      link: "/admin/user-lists",
    },
    {
      menu: "Order Management",
      icon: HiTable,
      link: "/admin/order-lists",
    },
  ];

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <AdminDashboardNavbar />
      {/* <Sidebar
        aria-label="Sidebar Menu"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sideBarMenuLinks &&
              sideBarMenuLinks.map((menu, index) => {
                return (
                  <NavLink to={`/admin/${menu.link}`}>
                    <Sidebar.Item key={index} icon={menu.icon}></Sidebar.Item>
                  </NavLink>
                );
              })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Sidebar.CTA>
          <div className="mb-3 flex items-center">
            <Badge color="yellow">Beta</Badge>
            <button
              aria-label="Close"
              className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
              type="button"
            >
              <HiX />
            </button>
          </div>
          <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
            Preview the new Flowbite dashboard navigation! You can turn the new
            navigation off for a limited time in your profile.
          </div>
          <a
            className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
            href="#"
          >
            Turn new navigation off
          </a>
        </Sidebar.CTA>
      </Sidebar> */}
      <DashboardSidebar sideBarMenuLinks={sideBarMenuLinks} />

      <main className="p-4 md:ml-64 h-auto pt-20">
        <Outlet />
      </main>
    </div>
  );
};
