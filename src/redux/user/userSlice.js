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
