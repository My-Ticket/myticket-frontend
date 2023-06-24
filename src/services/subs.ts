import axios from "axios";
import { baseUrl } from "../constants";

export async function  sub(plan_id: string) {
  let err: any = undefined;
  await axios
    .post(`${baseUrl}/create-subscription`, plan_id)
    .catch((error) => {
      err = error
      return undefined
    })
  if (err) {
    return [err.response.data.error, undefined];
  }
}
