import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {
    _id: "",
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    profile_picture: "",
    user_bookings: [],
    user_favorites: [],
    user_items: [],
    user_ratings: [],
    user_type: "",
  }
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token
      state.user._id = action.payload.user._id
      state.user.email = action.payload.user.email
      state.user.username = action.payload.user.username
      state.user.first_name = action.payload.user.first_name
      state.user.last_name = action.payload.user.last_name
      state.user.profile_picture = action.payload.user.profile_picture
      state.user.user_bookings = action.payload.user.user_bookings
      state.user.user_favorites = action.payload.user.user_favorites
      state.user.user_items = action.payload.user.user_items
      state.user.user_ratings = action.payload.user.user_ratings
      state.user.user_type = action.payload.user.user_type
    }
  }
});

