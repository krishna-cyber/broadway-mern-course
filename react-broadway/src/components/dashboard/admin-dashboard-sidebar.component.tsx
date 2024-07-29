import { Badge, Sidebar } from 'flowbite-react';
import React from 'react'
import {
    
    HiX,
  } from "react-icons/hi";

const DashboardSidebar = ({sideBarMenuLinks}:any) => {
  return (
    <Sidebar
       className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar Menu"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sideBarMenuLinks &&
              sideBarMenuLinks.map((menu:any, index:any) => {
                return (
                  <Sidebar.Item key={index} href={menu.link} icon={menu.icon}>
                    {menu.menu}
                  </Sidebar.Item>
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
      </Sidebar>
  )
}

export default DashboardSidebar