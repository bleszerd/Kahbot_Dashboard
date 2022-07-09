import axios from "axios";

const KahbotApiInstance = axios.create({
  baseURL: process.env.REACT_APP_KAHBOT_BASE_URL,
});

export default KahbotApiInstance;
