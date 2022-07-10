import { ICommandAsResponse } from "../../../../../../../shared/connection/api/kahbotApi/command/types";

export interface ICommandListProps {
  commandList: ICommandAsResponse[];
  actions?: {
    onEditPress: OnEditPressFn;
  };
}

export type OnEditPressFn = (commandId?: string) => void;
