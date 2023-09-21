import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  users: [],
}

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.users
  }
}
});

export const {setUsers} = usersSlice.actions

export default usersSlice.reducer