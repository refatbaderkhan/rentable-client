import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  item_latitude: "",
  item_longitude: "",
}

const itemCoordinatesSlice = createSlice({
  name: "coordinates",
  initialState: initialState,
  reducers: {
    setCoordinates: (state, action) => {
      state.item_latitude = action.payload.item_latitude
      state.item_longitude = action.payload.item_longitude
    }
  }
});

export const {setCoordinates} = itemCoordinatesSlice.actions

export default itemCoordinatesSlice.reducer