import { Outlet } from "react-router-dom";
import Header from "../../components/common/header/header.component";
import { Footer } from "flowbite-react";

export const HomePageLayout = () => {
  return (
    <>
      <Header/>
      <Outlet />
     
    <Footer container>
      <Footer.Copyright href="#" by="Broadway" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  
    </>
  );
};
