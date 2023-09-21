import {createSlice} from '@reduxjs/toolkit';

//cities state
//{
//  "cities": [
//      {
//          "_id": "64fdbe711a6693c5e49f6189",
//          "city_name": "Tripoli",
//          "areas": [
//              "tripli"
//          ],
//          "__v": 5
//      },
//      {
//          "_id": "64fdc1fa1f1098002b1ca259",
//          "city_name": "Beirut",
//          "areas": [
//              "Badaro",
//              "Furn el Chebbak",
//              "Ashrafieh"
//          ],
//          "__v": 3
//      }
//  ]
//}

const initialState = {
  cities: [],
};

const citySlice = createSlice({
  name: 'city',
  initialState: initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload.cities;
    },
    addCity: (state, action) => {
      state.cities.push(action.payload.city);
    },
  },
});


export const {setCities} = citySlice.actions;

export default citySlice.reducer;