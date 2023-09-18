import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import chatReducer from "./chat/chatSlice";
import socketReducer from "./socket/socketSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    socket: socketReducer,
  },
});

export default store;