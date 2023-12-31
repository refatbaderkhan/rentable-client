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
    deleteCity: (state, action) => {
      const city_id = action.payload;
      const cityIndex = state.cities.findIndex((city) => city._id === city_id);
      state.cities.splice(cityIndex, 1);
    },
    addArea: (state, action) => {
      const {area, city_id} = action.payload;
      const city = state.cities.find((city) => city._id === city_id);
      city.areas.push(area);
    },
    deleteArea: (state, action) => {
      const { deletedArea, city_id } = action.payload;
      const city = state.cities.find((city) => city._id === city_id);
      const areaIndex = city.areas.findIndex((area) => area === deletedArea);
      city.areas.splice(areaIndex, 1);
    },
  },
});


export const {setCities} = citySlice.actions;

export default citySlice.reducer;