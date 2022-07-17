/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {createContext, useContext, useState,useEffect} from 'react';

const ProductsContext = createContext();
import {API_BASE_URL as URL } from '../config/urls';
const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const getProduits = async()=>{
    const prod = await axios.post(`${URL}/api/products`);
    console.log({prouits:prod.data});
    setProducts(prod.data);
  };
  useEffect(() => {
    getProduits();
  },[]);
  return (
    <ProductsContext.Provider value={{products, setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsStateValue = () => useContext(ProductsContext);

export default ProductsProvider;
