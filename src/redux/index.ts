import { combineReducers, configureStore } from "@reduxjs/toolkit";

import commandReducer from "./slices/command";

export const rootReducer = combineReducers({
  commandReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
