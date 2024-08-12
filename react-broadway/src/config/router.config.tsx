import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "../pages/landing/landing.page";
import {
  RegisterPage,
  LoginPage,
  UserActivate,
} from "../pages/auth/auth_pages.page";

import { CategoryDetail } from "../pages/category/category-detail.page";
import { ErrorPage } from "../pages/error/error.page";
import { useEffect, useState } from "react";
import { CheckPermission } from "./rbac.config";
import { UserRoles } from "./constants";
import {
  AdminDashboardLayout,
  CustomerDashboardLayout,
  HomePageLayout,
  SellerDashboardLayout,
} from "../pages/layout";
import {
  AdminDashboard,
  CustomerDashboard,
  SellerDashboard,
} from "../pages/dashboard";
import LoadingPage from "../pages/loading/loading.page";
import {BannerEdit,BannerCreate,BannerList} from "../pages/banner"

import { useDispatch } from "react-redux";
import { getLoggedInUserForRedux } from "../store/reducer/user.reducer";
import { ChatPageLayout } from "../pages/layout/chat.layout";
import ProductPage from "../pages/product/product.page";
import { ProductCreate,ProductEdit,ProductList } from "../pages/product";


const RouterConfig = () => {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  // function to retrive loggedin user through token
  const getLoggedInUser = async () => {
    try {
     dispatch(getLoggedInUserForRedux())
     
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // get logged in user
    getLoggedInUser();
  }, []);
  return (
    <>
 {/* <Provider store={store}> */}

      {/* <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}> */}
        {loading ? (
          <LoadingPage />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePageLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/categories" element={<div>category</div>} />
                <Route path="/product/:productName" element={<ProductPage/>} />
                <Route path="/category/:slug" element={<CategoryDetail />} />
              </Route>

              {/* Admin dashboard routes */}
              <Route
                path="/admin"
                element={
                  <CheckPermission allowedBy={UserRoles.ADMIN}>
                    <AdminDashboardLayout />
                  </CheckPermission>
                }
                >
                <Route index element={<AdminDashboard />} />
                <Route
                  path="/admin/banner-lists"
                  element={<BannerList />}
                  />{" "}
                <Route path="/admin/banner-create" element={<BannerCreate />} />
                <Route path="/admin/banner/edit/:id" element={<BannerEdit />} />
                <Route path="/admin/product-lists" element={<ProductList />} />
                <Route path="/admin/Product-create" element={<ProductCreate />} />
                <Route path="/admin/Product/edit/:id" element={<ProductEdit />} />
                <Route
                  path="*"
                  element={<ErrorPage url="/admin" label="Back to Dashboard" />}
                  />
              </Route>

              {/* for testing admin dashboard */}
              {/* <Route path="/admin" element={<AdminDashboardLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route
                path="/admin/banner-lists"
                element={<BannerList />}
                />{" "}
                <Route path="/admin/banner-create" element={<BannerCreate />} />
                <Route
                path="*"
                element={<ErrorPage url="/admin" label="Back to Dashboard" />}
                />
                </Route> */}

              {/* seller dashboard routes */}
              <Route
                path="/seller"
                element={
                  <>
                    <SellerDashboardLayout /> <Outlet />
                  </>
                }
                >
                <Route
                  index
                  element={
                    <>
                      <SellerDashboard />
                    </>
                  }
                  />
                <Route
                  path="*"
                  element={
                    <ErrorPage url="/seller" label="Back to Dashboard" />
                  }
                  />
              </Route>

              {/* seller dashboard routes */}
              <Route
                path="/customer"
                element={
                  <CheckPermission allowedBy={UserRoles.CUSTOMER}>
                    <CustomerDashboardLayout />
                  </CheckPermission>
                }
                >
                <Route
                  index
                  element={
                    <>
                      <CustomerDashboard />
                    </>
                  }
                  />
                <Route
                  path="*"
                  element={
                    <ErrorPage url="/customer" label="Back to Dashboard" />
                  }
                />
              </Route>

              <Route path="/activate/:token" element={<UserActivate />} />
              <Route path="/chat" element={<ChatPageLayout />} />
              {/* 404 page */}
              <Route
                path="*"
                element={<ErrorPage url="/" label="Back to Homepage" />}
                />
            </Routes>
          </BrowserRouter>
        )}
      {/* </AuthContext.Provider> */}
        {/* </Provider> */}
    </>
  );
};

export default RouterConfig;
