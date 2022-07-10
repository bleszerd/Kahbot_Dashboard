export interface IResponseMessageResponse {
  message: string;
}

export interface GetAllCommandsResponse {
  response: ICommandAsResponse[];
}

export interface IReplace {
  symbol: string;
  with: string;
}

export type ICommandAsResponse = ICommand & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export interface ICommand {
  alias: string;
  active: boolean;
  response: string;
  replaces: IReplace[];
}

export interface IGetCommandParams {
  key: string;
  value: string;
}

export interface IGetCommand {
  response: ICommand;
}

export interface IUpdateCommandBody {
  id?: string;
  alias?: string;
  newCommand: ICommand;
}
