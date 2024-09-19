import { Badge, Sidebar } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ sideBarMenuLinks }: any) => {
  return (
    <Sidebar
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar Menu"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sideBarMenuLinks &&
            sideBarMenuLinks.map((menu: any, index: any) => {
              return (
                <NavLink key={index} to={`${menu.link}`}>
                  <Sidebar.Item  icon={menu.icon}>
                    {menu.menu}
                  </Sidebar.Item>
                </NavLink>
              );
            })}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
   
    </Sidebar>
  );
};

export default DashboardSidebar;
