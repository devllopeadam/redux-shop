import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users/UsersSlice';
import themeSlice from './theme/ThemeSlice';
import sportsSlice from './sports/SportsSlice';


const store = configureStore({
  reducer: {
    users: usersSlice,
    sports: sportsSlice,
    theme: themeSlice,
  },
});

export default store;