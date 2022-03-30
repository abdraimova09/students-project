import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";

import "./App.css";
import CartContextProvider from "./contexts/cartContext";

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
