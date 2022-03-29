import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";

import "./App.css";
import RolexPageImagesBlock2 from "./components/Rolex pageImagesBlock2Aizada/RolexPageImagesBlock2";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
      <RolexPageImagesBlock2 />
    </ProductsContextProvider>
  );
};

export default App;
