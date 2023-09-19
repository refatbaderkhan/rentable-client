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
    },
    addSubCategory: (state, action) => {
      const {subCategory, category_id} = action.payload
      const category = state.categories.find(category => category._id === category_id)
      category.subCategorySchema.push(subCategory)
    },
    deleteSubCategory: (state, action) => {
      const {subCategory_id, category_id} = action.payload
      const category = state.categories.find(category => category._id === category_id)
      const subCategoryIndex = category.subCategorySchema.findIndex(subCategory => subCategory._id === subCategory_id)
      category.subCategorySchema.splice(subCategoryIndex, 1)
    }
  },
});

export const {setCategories, addCategory} = categorySlice.actions

export default categorySlice.reducer