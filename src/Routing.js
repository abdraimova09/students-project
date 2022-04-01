import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Brands from "./components/Brands/Brands";
import Details from "./components/Details/Details";
import EditProduct from "./components/EditProduct/EditProduct";

import Abs from "./components/Abs/Abs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import Stores from "./components/StoresUlan/Stores";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import RolexPage from "./pages/RolexPage";
import Cart from "./components/Cart/Cart";
import Auth from "./components/Auth/Auth";
import { authContext } from "./contexts/authContext";
import { ADMIN_EMAIL } from "./helpers/consts";

const Routing = () => {
  let PUBLIC_ROUTES = [
    // {
    //   link: "/",
    //   element: <Home />,
    //   id: 1,
    // },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/products/:id",
      element: <Details />,
      id: 3,
    },
    // {
    //   link: "/brands",
    //   element: <Brands />,
    //   id: 4,
    // },
    // {
    //   link: "/stores",
    //   element: <Stores />,
    //   id: 5
    // }, {
    //   link: "/news",
    //   element: <Abs />,
    //   id: 19,
    // },
    // {
    //   link: "/rolex",
    //   element: <RolexPage />,
    //   id: 20
    // },
    {
      link: "/cart",
      element: <Cart />,
      id: 21
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 22
    }
  ];
  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { currentUser } = useContext(authContext)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        {ADMIN_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={currentUser === ADMIN_EMAIL ? item.element : <Navigate replace to="*" />} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
