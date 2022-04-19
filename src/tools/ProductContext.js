/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useState} from 'react';
import {similarProducts} from '../utils/FakeData';

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(similarProducts);

  return (
    <ProductsContext.Provider value={{products, setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsStateValue = () => useContext(ProductsContext);

export default ProductsProvider;
