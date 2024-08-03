import {
    HiArrowSmRight,
    HiChartPie,
    HiChat,
    HiInbox,
    HiPhoneMissedCall,
    HiPlusCircle,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards,
   
  } from "react-icons/hi";
  
  import {  Outlet } from "react-router-dom";
  import AdminDashboardNavbar from "../../components/dashboard/dashboard-navbar.component";
  import DashboardSidebar from "../../components/dashboard/admin-dashboard-sidebar.component";
import ChatLayoutSidebar from "../../components/chats/chat-sidebar.component";
import { HiUserGroup } from "react-icons/hi2";
//   import { Badge, Sidebar } from "flowbite-react";
  
  export const ChatPageLayout = () => {
    const sideBarMenuLinks = [
      {
        menu: "Home",
        icon: HiChat,
        link: "/",
      },
      {
        menu: "Dashboard",
        icon: HiPhoneMissedCall,
        link: "/admin",
      },
      {
        menu: "Banner Management",
        icon: HiUserGroup,
        link: "/admin/banner-lists",
      },
      
      
    ];
  
    return (
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <AdminDashboardNavbar />
        
        <ChatLayoutSidebar sideBarMenuLinks={sideBarMenuLinks} />
        This is chat layout
        <main className="p-4 md:ml-80 h-auto pt-20">
          <Outlet />
          <p>Show chat after user selected a chat</p>
          
        </main>
      </div>
    );
  };
  