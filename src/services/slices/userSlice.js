import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const initialState = {
  user: [],
};

const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    return api.getUser();
  } catch (err) {
    return err;
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

const { setUser } = userSlice.actions;
const userSliceReducer = userSlice.reducer;

export { setUser, userSliceReducer, getUser };
