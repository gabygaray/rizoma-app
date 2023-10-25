import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { appStateSlice } from "./slices/appStateSlice";

export const store = configureStore({
  reducer: {
    appState: appStateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
