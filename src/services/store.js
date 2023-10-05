import { configureStore } from '@reduxjs/toolkit';
import { userSliceReducer } from './slices/userSlice';
import { authSliceReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    auth: authSliceReducer,
  },
});
