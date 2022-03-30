import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brands from "./components/Brands/Brands";
import Details from "./components/Details/Details";
import EditProduct from "./components/EditProduct/EditProduct";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import Stores from "./components/StoresUlan/Stores";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
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
    {
      link: "/brands",
      element: <Brands />,
      id: 4,
    },
    {
      link: "/stores",
      element: <Stores />,
      id: 5
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
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        {ADMIN_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
