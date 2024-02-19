import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice'

const store = configureStore({
   reducer : {
      filters : filterSlice,
   }
})

export default store;