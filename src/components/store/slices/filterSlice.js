import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
   name: "filters",
   initialState: [],
   
   reducers : {
      applyFilter (state, action) {
         state.push(action.payload);
      },
      clearFilters (state, action) {
         const {title} = action.payload;
         const exituser = state.find(fill => fill.title === title);
         if(exituser) {
            if(window.confirm(`Are You Shure To Delete ${title} filter ?`)) {
               return state.filter(fill => fill !== fill);
            } else {
               return
            }  
         }
         
      },
   }
})

export const {applyFilter, clearFilters} = filterSlice.actions;
export default filterSlice.reducer;