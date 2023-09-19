import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  categories: [],
}


const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categories
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload.category)
    }
  },
});

export const {setCategories, addCategory} = categorySlice.actions

export default categorySlice.reducer