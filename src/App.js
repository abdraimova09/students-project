import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Routing from './Routing';
import ProductsContextProvider from './contexts/productsContext';

import './App.css';
import HomePage from './components/HomePage9BlockCalibre/HomePage';

const App = () => {
  return (
    <ProductsContextProvider>
      <Routing />
      <HomePage/>
      
    </ProductsContextProvider>
    
  );
};

export default App;