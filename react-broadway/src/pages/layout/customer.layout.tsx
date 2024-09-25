import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  
} from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";
import { GoCodeReview } from "react-icons/go";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardFooter from "../../components/common/footer/footer.component";
import DashboardSidebar from "../../components/dashboard/admin-dashboard-sidebar.component";
import  { DashboardNavbar } from "../../components/dashboard/dashboard-navbar.component";
import { HiUser } from "react-icons/hi2";
import { useEffect } from "react";
const CustomerDashboardLayout = () => {
  const navigate = useNavigate()
  const sideBarMenuLinks = [
    {
      menu: "Home",
      icon: HiArrowSmRight,
      link: "/",
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
      menu: "Ordered Products",
      icon: IoMdHeart,
      link: "/customer/product-lists",
    },
   
  ];

  useEffect(()=>{
    navigate('/customer/order-lists')
  },[])
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