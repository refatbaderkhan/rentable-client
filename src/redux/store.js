import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";
import chatReducer from "./slices/chat/chatSlice";
import socketReducer from "./slices/socket/socketSlice";
import coordinatesReducer from "./slices/itemCoordinates/itemCoordinatesSlice";
import itemsReducer from "./slices/items/itemsSlice";
import ChatsReducer from "./slices/chats/chatsSlice";
import usersReducer from "./slices/users/usersSlice";
import searchReducer from "./slices/search/searchSlice";
import categoryReducer  from "./slices/category/categorySlice";
import cityReducer from "./slices/city/citySlice";
import alertReducer from "./slices/alert/alertSlice";
import { createLogger } from "redux-logger";

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    socket: socketReducer,
    coordinates: coordinatesReducer,
    items: itemsReducer,
    chats: ChatsReducer,
    users: usersReducer,
    search: searchReducer,
    category: categoryReducer,
    city: cityReducer,
    alert: alertReducer,
  },
  middleware: [createLogger()],
});

export default store;