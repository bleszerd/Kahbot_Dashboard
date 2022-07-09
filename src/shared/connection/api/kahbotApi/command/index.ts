import { AxiosInstance } from "axios";

import ENDPOINTS from "../../endpoints";
import { GetAllCommands } from "./types";

const createCommandInstanceApi = (instance: AxiosInstance) => {
  const getAllCommands = () =>
    instance.get<GetAllCommands>(`${ENDPOINTS.COMMAND.GET_ALL}`);

  return {
    getAllCommands,
  };
};

export default { createCommandInstanceApi };
