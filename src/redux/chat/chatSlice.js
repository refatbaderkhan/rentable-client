import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  room_id: "",
}

const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    setChat: (state, action) => {
      state.room_id = action.payload.room_id
    }
  }
});