import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";

import "./App.css";
import Stores from "./components/StoresUlan/Stores";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
      <Stores />
    </ProductsContextProvider>
  );
};

export default App;
