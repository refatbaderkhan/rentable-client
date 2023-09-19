import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import chatReducer from "./chat/chatSlice";
import socketReducer from "./socket/socketSlice";
import coordinatesReducer from "./itemCoordinates/itemCoordinatesSlice";
import  categoryReducer  from "./category/categorySlice";
import { createLogger } from "redux-logger";

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    socket: socketReducer,
    coordinates: coordinatesReducer,
    category: categoryReducer,
  },
  middleware: [createLogger()],
});

export default store;