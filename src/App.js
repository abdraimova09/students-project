import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";

import "./App.css";
import RolexP1 from "./components/RolexP1/RolexP1";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
      <RolexP1 />
    </ProductsContextProvider>
  );
};

export default App;
