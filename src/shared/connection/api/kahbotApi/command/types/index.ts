export interface GetAllCommands {
  response: ICommand[];
}

export interface ICommand {
  _id: string;
  alias: string;
  active: boolean;
  response: string;
  replaces: [
    {
      symbol: string;
      with: string;
    },
    {
      symbol: string;
      with: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
}
