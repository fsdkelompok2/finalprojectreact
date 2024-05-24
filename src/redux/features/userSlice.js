import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
}

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    resetState(state) {
      return initialState;
    }
  }
});

export const {
    setUser,
    resetState
} = userSlice.actions;

export default userSlice.reducer;