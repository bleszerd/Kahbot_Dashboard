import {
  ICommand,
  ICommandAsResponse,
} from "../../../../shared/connection/api/kahbotApi/command/types";

export interface ICommandSliceInitialState {
  fetchingCommand: boolean;
  lastQueriedCommand: ICommandAsResponse | null;
  allCommands: ICommandAsResponse[];
}

export interface IGetCommandResponse {
  response: ICommandAsResponse;
}

export interface IGetCommandParams {
  id?: string;
  alias?: string;
}

export interface IUpdateCommand {
  id?: string;
  alias?: string;
  newCommand: ICommand;
}
