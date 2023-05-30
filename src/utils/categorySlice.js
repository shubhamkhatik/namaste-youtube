import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    name:[],
    categoryStatus: false,
    searchString:"",
  },
  reducers: {
    addName:(state,action)=>{
      state.name=action.payload

    },
    categoryMode: (state, action) => {
      state.categoryStatus = action.payload;
    },
    addSearchString: (state, action)=>{
        state.searchString=action.payload;
    }
  },
});

export const { categoryMode, addSearchString, addName} = categorySlice.actions;
export default categorySlice.reducer;
