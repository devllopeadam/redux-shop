import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users/UsersSlice';
import themeSlice from './theme/ThemeSlice';


const store = configureStore({
  reducer: {
    users: usersSlice,
    theme: themeSlice,
  },
});

export default store;