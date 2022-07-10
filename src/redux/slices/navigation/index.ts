import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionButtonId } from "../../../shared/components/DashboardSidebar/types";

import * as T from "./types";

const initialState = {
  activeSidebarActionId: ActionButtonId.HOMEPAGE,
} as T.INaviationSliceInitialState;

export const navigationSlice = createSlice({
  name: "@Navigation",
  initialState,
  reducers: {
    dashboardNavigate: (
      draft: T.INaviationSliceInitialState,
      action: PayloadAction<ActionButtonId>
    ) => {
      draft.activeSidebarActionId = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { dashboardNavigate } = navigationSlice.actions;

export default navigationSlice.reducer;
