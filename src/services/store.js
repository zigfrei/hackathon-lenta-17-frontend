import { configureStore } from '@reduxjs/toolkit';
import { dataSliceReducer } from './slices/dataSlice';
import { authSliceReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    data: dataSliceReducer,
    auth: authSliceReducer,
  },
});
