import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: '',  // Should this be null or undefined initially?
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.value.username = action.payload;
    },
    removeUser: (state) => {
      state.value = initialState;
    },
  },
});

// Export both actions
export const { setUsername, removeUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
