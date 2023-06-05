import axios, { AxiosError } from "axios";
import { baseUrl } from "../constants";

export async function loginUser(credentials: {
  email: string;
  password: string;
  rememberMe?: boolean;
}) {
  let err: any = undefined;
  const res = await axios
    .post(`${baseUrl}/auth/login`, credentials)
    .catch((error) => {
      err = error;
      return undefined;
    });
  if (err) {
    return [err.response.data.error, undefined];
  } 
  localStorage.setItem("token", res!.data.token);
  return [undefined, res!.data.email];
}

export const registerUser = async (credentials: {
  name: string;
  email: string;
  password: string;
}) => {
  let err: any = undefined;
  const res = await axios
    .post(`${baseUrl}/auth/register`, credentials)
    .catch((error) => {
      err = error;
      return undefined;
    });
  if (err) {
    return [err.response.data.error, undefined];
  }
  localStorage.setItem("token", res!.data.token);
  return [undefined, res!.data.email];
};
