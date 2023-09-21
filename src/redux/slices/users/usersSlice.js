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
    },
    deleteFromUsers: (state, action) => {
      const user_id = action.payload
      const userIndex = state.users.findIndex(user => user._id === user_id)
      state.users.splice(userIndex, 1)
    }
}
});

export const {setUsers, deleteFromUsers} = usersSlice.actions

export default usersSlice.reducer