import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  chats: [],
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState: initialState,
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload.chats;
    },
    addMessage: (state, action) => {
      const {chat_id, message} = action.payload;
      const chat = state.chats.find(chat => chat._id === chat_id);
      chat.messages.push(message);
    },
  },
});

export const {setChats, addMessage} = chatsSlice.actions;

export default chatsSlice.reducer;