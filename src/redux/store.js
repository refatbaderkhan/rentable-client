import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";
import chatReducer from "./slices/chat/chatSlice";
import socketReducer from "./slices/socket/socketSlice";
import coordinatesReducer from "./slices/itemCoordinates/itemCoordinatesSlice";
import categoryReducer  from "./slices/category/categorySlice";
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