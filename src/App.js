import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";

import "./App.css";
import SectionEradil from "./components/SectionEradil/SectionEradil";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
      <SectionEradil />
    </ProductsContextProvider>
  );
};

export default App;
