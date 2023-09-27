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
    },
    addUserReview: (state, action) => {
      const {user_id, review} = action.payload
      const user = state.users.find(user => user._id === user_id)
      user.user_ratings.push(review)
    }
  }
});

export const {setUsers, deleteFromUsers, addUserReview} = usersSlice.actions

export default usersSlice.reducer