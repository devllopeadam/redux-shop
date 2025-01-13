/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { idSportif: 1, nom: "adam", prenom: "Dev", email: "adam@gmail.com", ville: "Tangier", password: "adam" },
    { idSportif: 2, nom: "kimo", prenom: "dev", email: "kimo@gmail.com", ville: "Tangier", password: "kimo" },
    { idSportif: 3, nom: "admin", prenom: "admin", email: "admin@gmail.com", ville: "Tangier", password: "admin" },
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
    },
    logout(state, action) {
      state.currentUser = {};
    }
  }
});

export const { addUser, setCurrentUser, logout } = usersSlice.actions;

export default usersSlice.reducer;