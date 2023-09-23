import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  search: "",
}

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload.search
    },
    deleteSearch: (state) => {
      state.search = ""
    }
  }
});

export const {setSearch, deleteSearch} = searchSlice.actions

export default searchSlice.reducer