import { AxiosInstance } from "axios";
import { IGetCommandResponse } from "../../../../../redux/slices/command/types";

import ENDPOINTS from "../../endpoints";
import {
  GetAllCommandsResponse,
  IGetCommandParams,
  IResponseMessageResponse,
  IUpdateCommandBody,
} from "./types";

const createCommandInstanceApi = (instance: AxiosInstance) => {
  const getAllCommands = () =>
    instance.get<GetAllCommandsResponse>(`${ENDPOINTS.COMMAND.GET_ALL}`);

  const getCommand = (params: IGetCommandParams) =>
    instance.get<IGetCommandResponse>(
      `${ENDPOINTS.COMMAND.GET_COMMAND}?${params.key}=${params.value}`
    );

  const updateCommand = (body: IUpdateCommandBody) =>
    instance.put<IResponseMessageResponse>(
      `${ENDPOINTS.COMMAND.UPDATE_COMMAND}`,
      body
    );

  return {
    getAllCommands,
    getCommand,
    updateCommand,
  };
};

export default { createCommandInstanceApi };
