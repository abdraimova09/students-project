import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";

import "./App.css";
import HomePageBekbolsun from "./components/HomePageBekbolsun/HomePageBekbolsun";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
      <HomePageBekbolsun />
    </ProductsContextProvider>
  );
};

export default App;
