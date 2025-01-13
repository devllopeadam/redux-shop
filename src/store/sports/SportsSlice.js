import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sports: [
    { idSportif: 1, nomSport: "Football", niveau: "Intermediate" },
    { idSportif: 2, nomSport: "Football", niveau: "Intermediate" },
    { idSportif: 1, nomSport: "Tennis", niveau: "Advanced" },
    { idSportif: 2, nomSport: "Swimming", niveau: "Beginner" },
  ]
};

export const sportsSlice = createSlice({
  name: "sports",
  initialState,
  reducers: {
    addSport(state, action) {
      state.sports.push(action.payload);
    },
    updateSport(state, action) {
      const { idSportif, nomSport, niveau } = action.payload;
      const index = state.sports.findIndex(
        (sport) => sport.idSportif === idSportif && sport.nomSport === nomSport
      );
      if (index !== -1) {
        state.sports[index] = { ...state.sports[index], niveau };
      }
    },
    deleteSport(state, action) {
      const { idSportif, nomSport } = action.payload;
      state.sports = state.sports.filter(
        (sport) => !(sport.idSportif === idSportif && sport.nomSport === nomSport)
      );
    },
  }
});

export const { addSport, updateSport, deleteSport } = sportsSlice.actions;

export default sportsSlice.reducer;