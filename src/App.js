import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";

import "./App.css";
import SectionThird from "./components/SectionThird/SectionThird";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
    </ProductsContextProvider>
  );
};

export default App;
