import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  cities: [],
};

const citySlice = createSlice({
  name: 'city',
  initialState: initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload.cities;
    }
  },
});


export const {setCities} = citySlice.actions;

export default citySlice.reducer;