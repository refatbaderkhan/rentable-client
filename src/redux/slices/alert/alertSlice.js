import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  alert: "",
}

const alertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload.alert;
    }
  }
});

export const {setAlert} = alertSlice.actions

export default alertSlice.reducer