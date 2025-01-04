import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users/UsersSlice';


const store = configureStore({
  reducer: {
    users: usersSlice
  },
});

export default store;