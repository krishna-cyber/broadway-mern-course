
import logo_full from './../../../../src/assets/images/logo/logo-full.png'
import logo from '../../../assets/images/logo/logo-only.png'
import { Avatar, Dropdown, Navbar } from "flowbite-react";


const Header = () => {
  return (
    <Navbar fluid rounded className=' p-4 shadow-2xl'>
    <Navbar.Brand href="#">
      <img src={logo_full} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />

    </Navbar.Brand>
    <div className="flex md:order-2">
      <Navbar.Collapse>
        <Navbar.Link href='/register'>Register</Navbar.Link>
        <Navbar.Link href='/login'>Login</Navbar.Link>
      </Navbar.Collapse>
      {/* <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img={logo} rounded />
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
      </Dropdown> */}
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/categories">Categories</Navbar.Link>
      <Navbar.Link href="/products">All products</Navbar.Link>
      <Navbar.Link href="/contact">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header