import { IReplace } from "../../../../../../../shared/connection/api/kahbotApi/command/types";

export interface ICommandReplacesListProps {
  replaces: IReplace[];
  actions?: {
    onChange: (replaces: IReplace[]) => void;
  };
}
