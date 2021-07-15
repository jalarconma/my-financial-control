import { createSlice } from "@reduxjs/toolkit";

const userState = {
  value: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setUser(state, { payload }){
      state.value = payload;
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice;