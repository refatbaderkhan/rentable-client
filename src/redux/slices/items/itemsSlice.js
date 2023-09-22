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
}
});

export const {setItems} = itemsSlice.actions

export default itemsSlice.reducer