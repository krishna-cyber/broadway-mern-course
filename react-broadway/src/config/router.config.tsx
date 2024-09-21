import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { BannerEdit, BannerCreate, BannerList } from "../pages/banner";

import { useDispatch } from "react-redux";
import { getLoggedInUserForRedux } from "../store/reducer/user.reducer";
import ProductPage from "../pages/product/product.page";
import { ProductCreate, ProductEdit, ProductList } from "../pages/product";
import UserList from "../pages/users/user-list.page";
import UserCreate from "../pages/users/user-create.page";
import UserEdit from "../pages/users/user-edit.page copy";
import { CategoryCreate, CategoryEdit, CategoryList } from "../pages/category";
import { BrandCreate, BrandEdit, BrandList } from "../pages/brand";
import { OrderList } from "../pages/order";
import CartPage from "../pages/cart/cart.page";
import ProductUpdate from "../pages/product/product-edit.page";
import BrandUpdate from "../pages/brand/brand-edit.page copy";
import { OrderDetail } from "../pages/order/order-detail.page";
import { ReviewsHistory } from "../pages/reviews/reviews-history";
import ProductViewLandingPage from "../components/products/product-Listing.component";
import OrderedProductList from "../pages/order/ordered-product-list.page";

const RouterConfig = () => {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // function to retrive loggedin user through token
  const getLoggedInUser = async () => {
    try {
      dispatch(getLoggedInUserForRedux());
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
              <Route path="/product/:productName" element={<ProductPage />} />
              <Route path="/category/:slug" element={<CategoryDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/products" element={<ProductViewLandingPage />} />
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
              <Route path="/admin/banner-lists" element={<BannerList />} />{" "}
              <Route path="/admin/banner-create" element={<BannerCreate />} />
              <Route path="/admin/banner/edit/:id" element={<BannerEdit />} />
              <Route path="/admin/product-lists" element={<ProductList />} />
              <Route path="/admin/Product-create" element={<ProductCreate />} />
              <Route
                path="/admin/Product/edit/:name"
                element={<ProductUpdate />}
              />
              <Route path="/admin/user-lists" element={<UserList />} />
              <Route path="/admin/user-create" element={<UserCreate />} />
              <Route path="/admin/user/edit/:id" element={<UserEdit />} />
              <Route path="/admin/category-lists" element={<CategoryList />} />
              <Route
                path="/admin/category-create"
                element={<CategoryCreate />}
              />
              <Route
                path="/admin/category/edit/:id"
                element={<CategoryEdit />}
              />
              <Route path="/admin/order-lists" element={<OrderList />} />
              <Route path="/admin/brand-lists" element={<BrandList />} />{" "}
              <Route path="/admin/brand-create" element={<BrandCreate />} />
              <Route path="/admin/brand/edit/:id" element={<BrandUpdate />} />
              <Route path="/admin/order/:id" element={<OrderDetail />} />
              <Route
                path="*"
                element={<ErrorPage url="/admin" label="Back to Dashboard" />}
              />
            </Route>

            {/* seller dashboard routes */}
            <Route
              path="/seller"
              element={
                <CheckPermission allowedBy={UserRoles.SELLER}>
                  <SellerDashboardLayout />
                </CheckPermission>
              }
            >
              {/* <Route path="/seller" element={<SellerDashboardLayout />}> */}
              <Route index element={<SellerDashboard />} />
              <Route path="/seller/brand-lists" element={<BrandList />} />{" "}
              <Route path="/seller/brand-create" element={<BrandCreate />} />
              <Route path="/seller/brand/edit/:id" element={<BrandEdit />} />
              <Route path="/seller/product-lists" element={<ProductList />} />
              <Route
                path="/seller/Product-create"
                element={<ProductCreate />}
              />
              <Route
                path="/seller/Product/edit/:id"
                element={<ProductEdit />}
              />
     
            </Route>

            {/* customer dashboard routes */}

            {/* This is for testing purpose only */}
            <Route path="/customer" element={<CustomerDashboardLayout />}>
              <Route index element={<CustomerDashboard />} />
              <Route path="/customer/order-lists" element={<OrderList />} />
              <Route
                path="/customer/review-list"
                element={<ReviewsHistory/>}
              />
              <Route path="/customer/order/:id" element={<OrderDetail />} />
              <Route path="/customer/product-lists" element={<OrderedProductList />} />
              <Route
                path="*"
                element={
                  <ErrorPage url="/customer" label="Back to Dashboard" />
                }
              />
            </Route>

            <Route path="/activate/:token" element={<UserActivate />} />
            {/* <Route path="/chat" element={<ChatPageLayout />} /> */}
            {/* 404 page */}
            <Route
              path="*"
              element={<ErrorPage url="/" label="Back to Homepage" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default RouterConfig;
