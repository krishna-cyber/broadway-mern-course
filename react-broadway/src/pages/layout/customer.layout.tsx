import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  
} from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";
import { GoCodeReview } from "react-icons/go";
import { Outlet } from "react-router-dom";
import DashboardFooter from "../../components/common/footer/footer.component";
import DashboardSidebar from "../../components/dashboard/admin-dashboard-sidebar.component";
import  { DashboardNavbar, SellerDashboardNavbar } from "../../components/dashboard/dashboard-navbar.component";
import { HiUser } from "react-icons/hi2";
const CustomerDashboardLayout = () => {
  const sideBarMenuLinks = [
    {
      menu: "Home",
      icon: HiArrowSmRight,
      link: "/",
    },
    {
      menu: "Dashboard",
      icon: HiChartPie,
      link: "/customer",
    },
    
  

    {
      menu: "Orders",
      icon: HiTable,
      link: "/customer/order-lists",
    },
    
    {
      menu: "Reviews",
      icon: GoCodeReview,
      link: "/customer/review-list",
    },
    {
      menu: "Wishlist",
      icon: IoMdHeart,
      link: "/customer/order-lists",
    },
    {
      menu: "Manage my account",
      icon: HiUser,
      link: "/customer/order-lists",
    },
  ];
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <DashboardNavbar />

      <DashboardSidebar sideBarMenuLinks={sideBarMenuLinks} />

      <main className="p-4 md:ml-64 h-auto pt-20">
        <Outlet />
        <DashboardFooter />
      </main>
    </div>
  )
}

export default CustomerDashboardLayout