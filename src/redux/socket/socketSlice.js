import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  socket: "",
}

const socketSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload.socket
    }
  }
});
