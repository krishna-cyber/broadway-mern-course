import { Avatar, Dropdown, Navbar,Badge, Sidebar } from "flowbite-react";
import logo from '../../assets/images/logo/logo-only.png'
import { HiBell, HiCurrencyDollar, HiLogout, HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { HiCircleStack, HiSquare3Stack3D, HiSquaresPlus } from "react-icons/hi2";


export const AdminPanel = ()=>{
  return(
<div className="antialiased bg-gray-50 dark:bg-gray-900">
<Navbar fluid rounded className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Broadway logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Broadway E-commerce</span>
        <Navbar.Toggle />
      </Navbar.Brand>
     
      <div className="flex gap-4 md:order-2">
        {/* notification dropdown */}
      <Dropdown
          arrowIcon={false}
          inline
          label={
            <HiBell className=" h-8 w-8 text-slate-500"/>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        {/* dashboard option dropdown */}
      <Dropdown
          arrowIcon={false}
          inline
          label={
           <HiSquare3Stack3D className=" w-8 h-8 text-slate-500"/>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        {/* profile dropdown avatar */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block font-semibold text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item icon={HiSquaresPlus}>Dashboard</Dropdown.Item>
          <Dropdown.Item icon={HiCircleStack}>Settings</Dropdown.Item>
          <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <Sidebar className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar with call to action button example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA>
        <div classNameName="mb-3 flex items-center">
          <Badge color="warning">Beta</Badge>
          <button
            aria-label="Close"
            classNameName="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            type="button"
          >
            <svg
              aria-hidden
              classNameName="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div classNameName="mb-3 text-sm text-cyan-900 dark:text-gray-400">
          Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your
          profile.
        </div>
        <a
          classNameName="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
          href="#"
        >
          Turn new navigation off
        </a>
      </Sidebar.CTA>
    </Sidebar>
       <main className="p-4 md:ml-64 h-auto pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"
        ></div>
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
        ></div>
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
        ></div>
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
        ></div>
      </div>
      <div
        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
      ></div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
      </div>
      <div
        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
      ></div>
      <div className="grid grid-cols-2 gap-4">
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
      </div>
    </main>
</div>


  )
}