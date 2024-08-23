import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { GoCodeReview } from "react-icons/go";
import { Outlet } from "react-router-dom";
import DashboardFooter from "../../components/common/footer/footer.component";
import DashboardSidebar from "../../components/dashboard/admin-dashboard-sidebar.component";
import  { SellerDashboardNavbar } from "../../components/dashboard/dashboard-navbar.component";
const SellerDashboardLayout = () => {
  const sideBarMenuLinks = [
    {
      menu: "Home",
      icon: HiArrowSmRight,
      link: "/",
    },
    {
      menu: "Dashboard",
      icon: HiChartPie,
      link: "/seller",
    },
    
    {
      menu: "Category Management",
      icon: HiInbox,
      link: "/seller/category-lists",
    },
    {
      menu: "Product Management",
      icon: HiShoppingBag,
      link: "/seller/product-lists",
    },

    {
      menu: "Order Management",
      icon: HiTable,
      link: "/seller/order-lists",
    },
    
    {
      menu: "Reviews Management",
      icon: GoCodeReview,
      link: "/seller/review-list",
    },
  ];
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <SellerDashboardNavbar />

      <DashboardSidebar sideBarMenuLinks={sideBarMenuLinks} />

      <main className="p-4 md:ml-64 h-auto pt-20">
        <Outlet />
        <DashboardFooter />
      </main>
    </div>
  )
}

export default SellerDashboardLayout