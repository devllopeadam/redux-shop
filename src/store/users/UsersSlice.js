import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, nom: "adam", prenom: "xwixo", email: "adam@gmail.com", ville: "Tangier", password: "adam" },
    { id: 2, nom: "kimo", prenom: "xwixo", email: "kimo@gmail.com", ville: "Tangier", password: "kimo" },
  ],
  currentUser: {}
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    }
  }
});

export const { addUser, setCurrentUser } = usersSlice.actions;

export default usersSlice.reducer;