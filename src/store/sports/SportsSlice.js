import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sports: [
    { idSportif: 1, nomSport: "⚽ Football", niveau: "Intermediate" },
    { idSportif: 1, nomSport: "🎾 Tennis", niveau: "Advanced" },
    { idSportif: 2, nomSport: "🏊 Swimming", niveau: "Beginner" },]
};

export const sportsSlice = createSlice({
  name: "sports",
  initialState,
  reducers: {
    addSport(state, action) {
      state.sports.push(action.payload);
    },
  }
});

export const { addSport } = sportsSlice.actions;

export default sportsSlice.reducer;