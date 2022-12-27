import { type } from '@testing-library/user-event/dist/type';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, productReducer } from '../state/ProductState/productReducer';

const PRODUCT_CONTEXT = createContext()


const ProductProvider = ({ children }) => {

  const [state, dispatch] = useReducer(productReducer, initialState);
// console.log(state)
  useEffect(() => {
    dispatch({type: actionTypes.FETCH_START})
    fetch("products.json")
      .then(res => res.json())
      .then(data =>dispatch({type:actionTypes.FETCH_SUCCESS, payload:data}))
  }, [])

  const value = {
    state,
    dispatch,
  };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );

};

export const useProduct = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
}

export default ProductProvider;