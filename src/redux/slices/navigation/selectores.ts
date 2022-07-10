import { ReduxStore } from "../../types";

export const selectActiveSidebarActionId = (state: ReduxStore) =>
  state.navigationReducer.activeSidebarActionId;
