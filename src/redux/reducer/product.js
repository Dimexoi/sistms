import { createReducer } from '@reduxjs/toolkit';

import { findAllProducts, setDisplayedProducts, setIsLoading, setSortingSetting, setSortingDirection } from '../actions/product';

const initialState = {
  products: {},
  displayedProducts: [],
  isLoading: false,
  sortingSetting: 'default',
  sortingDirection: 0
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(findAllProducts.fulfilled, (state, action) => {

    state.products = action.payload;
  })
  .addCase(findAllProducts.pending, (state, action) => {
    state.message = action.payload;
  })
  .addCase(findAllProducts.rejected, (state, action) => {
    state.message = action.payload;
  })
  .addCase(setDisplayedProducts, (state, action) => {
    state.displayedProducts = action.payload;
  })
  .addCase(setIsLoading, (state, action) => {
    state.isLoading = action.payload;
  })
  .addCase(setSortingSetting, (state, action) => {
    state.sortingSetting = action.payload;
  })
  .addCase(setSortingDirection, (state, action) => {
    state.sortingDirection = action.payload;
  })
  
});

export default productReducer;