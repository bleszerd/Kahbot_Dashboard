import { ICommand } from "../../../../shared/connection/api/kahbotApi/command/types";

export interface ICommandSliceInitialState {
  fetchingCommand: boolean;
  allCommands: ICommand[];
}
