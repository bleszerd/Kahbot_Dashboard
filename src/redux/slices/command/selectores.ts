import { ReduxStore } from "../../types";

export const selectFetchingCommand = (state: ReduxStore) =>
  state.commandReducer.fetchingCommand;

export const selectLastQueriedCommand = (state: ReduxStore) =>
  state.commandReducer.lastQueriedCommand;

export const selectAllCommands = (state: ReduxStore) =>
  state.commandReducer.allCommands;
