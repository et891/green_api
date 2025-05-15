import axios from "axios";
import { INSTANCE_ID, API_TOKEN } from "../config";

export const makeRequest = (
  method: "get" | "post",
  endpointOrUrl: string,
  data?: any,
  isFullUrl: boolean = false
) => {
  const url = isFullUrl
    ? endpointOrUrl
    : `https://api.green-api.com/waInstance${INSTANCE_ID}/${endpointOrUrl}/${API_TOKEN}`;

  return axios({
    method,
    url,
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
