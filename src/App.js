import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";

import "./App.css";
import HomePage7BlockCardsChynara from "./components/HomePage7BlockCardsChynara/HomePage7BlockCardsChynara";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
      <HomePage7BlockCardsChynara />
    </ProductsContextProvider>
  );
};

export default App;
