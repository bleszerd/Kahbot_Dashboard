import { combineReducers, configureStore } from "@reduxjs/toolkit";

import commandReducer from "./slices/command";
import navigationReducer from "./slices/navigation";

export const rootReducer = combineReducers({
  commandReducer,
  navigationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
