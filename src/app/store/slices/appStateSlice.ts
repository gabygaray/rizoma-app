import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { appStateSliceInitialState } from "./contants";

export const appStateSlice = createSlice({
  name: "appState",
  initialState: appStateSliceInitialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

export const { setAuthenticated } = appStateSlice.actions;

export default appStateSlice.reducer;
