import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  userEmail: null,
  userPassword: '',
  userId: null,
  isLoading: false,
  loginSucces: false,
  loginError: null,
  logoutSucces: false,
};

const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
  try {
    return api.postLoginUser(data);
  } catch (err) {
    return err;
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userEmail = null;
      state.userPassword = '';
      state.userId = null;
      state.loginSucces = false;
      state.logoutSucces = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.loginError = null;
      state.logoutSucces = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.logoutSucces = false;
      state.loginSucces = true;
      console.log(action.payload);
      state.userName = action.payload.first_name;
      state.userEmail = action.payload.email;
      state.userId = action.payload.id;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.loginSucces = false;
      state.loginError = action.payload;
      console.log(action);
      // For a local demonstration of the product //////////////////////////
      state.loginSucces = true;
      state.userName = 'Павел Петров';
      state.userEmail = 'pavel_petrov86@lenta.ru';
      state.userId = '1';
    });
  },
});
const { logoutUser, setCurrentAuth } = authSlice.actions;
const authSliceReducer = authSlice.reducer;

export {
  setCurrentAuth, logoutUser, authSliceReducer, loginUser,
};
