import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  
} from "react-icons/hi";
import { TbBrandAppleFilled } from "react-icons/tb";

import { Outlet } from "react-router-dom";
import {AdminDashboardNavbar} from "../../components/dashboard/dashboard-navbar.component";
import DashboardSidebar from "../../components/dashboard/admin-dashboard-sidebar.component";
import DashboardFooter from "../../components/common/footer/footer.component";

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
      menu: "Brand Management",
      icon: TbBrandAppleFilled,
      link: "/admin/brand-lists",
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

      <DashboardSidebar sideBarMenuLinks={sideBarMenuLinks} />

      <main className="p-4 md:ml-64 h-auto pt-20">
        <Outlet />
        <DashboardFooter />
      </main>
    </div>
  );
};
