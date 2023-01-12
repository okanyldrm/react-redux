import React from 'react';
import './App.css';

import Product, { data } from './Components/Product';
import Category from './Components/Category'

function App() {
  return (
    <>
      <Category></Category>
      <Product></Product>

      <h5>{data}</h5>
    </>
  );
}



export default App;
