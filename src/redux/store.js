import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import chatReducer from "./chat/chatSlice";
import socketReducer from "./socket/socketSlice";
import { createLogger } from "redux-logger";

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    socket: socketReducer,
  },
  middleware: [createLogger()],
});

export default store;