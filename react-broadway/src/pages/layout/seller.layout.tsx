import {
  HiArrowSmRight,
  HiChartPie,
  HiShoppingBag,
  HiTable,
 
} from "react-icons/hi";
import { GoCodeReview } from "react-icons/go";
import { Outlet } from "react-router-dom";
import DashboardFooter from "../../components/common/footer/footer.component";
import DashboardSidebar from "../../components/dashboard/admin-dashboard-sidebar.component";
import  { SellerDashboardNavbar } from "../../components/dashboard/dashboard-navbar.component";
import { FaApple } from "react-icons/fa";
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
      menu: "Brand Management",
      icon: FaApple,
      link: "/seller/Brand-lists",
    },
    {
      menu: "Product Management",
      icon: HiShoppingBag,
      link: "/seller/product-lists",
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