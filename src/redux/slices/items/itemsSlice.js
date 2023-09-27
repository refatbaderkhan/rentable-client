import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

const itemsSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload.items
    },
  addItemReview: (state, action) => {
    const {item_id, review} = action.payload
    const item = state.items.find(item => item._id === item_id)
    item.item_ratings.push(review)
  },
}
});

export const {setItems, addItemReview} = itemsSlice.actions

export default itemsSlice.reducer