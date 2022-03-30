import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";

import "./App.css";

const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routing />
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
