import axios from "axios";
import ENDPOINTS from "../endpoints";

import Command from "./command";

export const axiosClient = axios.create({
  baseURL: ENDPOINTS.BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
});

export default {
  command: Command.createCommandInstanceApi(axiosClient),
};
