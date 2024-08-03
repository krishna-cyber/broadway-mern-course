import { Avatar, Badge, Sidebar } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo/logo-only.png'
const ChatLayoutSidebar
 = ({ sideBarMenuLinks }:any) => {
  return (
    <Sidebar
      className="fixed top-0 left-0 z-40 w-80 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar Menu"
    >
      <Sidebar.Logo href="#" img="https://th.bing.com/th/id/R.d3856046f024863d47d30474703d42a2?rik=E6kvywIHoJhI6g&pid=ImgRaw&r=0" imgAlt="Flowbite logo">
        Chat
      </Sidebar.Logo>
       
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sideBarMenuLinks &&
            sideBarMenuLinks.map((menu: any, index: any) => {
              return (
                <NavLink key={index} to={`${menu.link}`}>
                  <Sidebar.Item  icon={menu.icon}/>
                   
                
                </NavLink>
              );
            })}
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>second group</Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA>
       <Avatar  alt="logo" />
      </Sidebar.CTA>
    </Sidebar>
  );
};

export default ChatLayoutSidebar
;
