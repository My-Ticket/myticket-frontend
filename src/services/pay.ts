import axios from "axios";
import { baseUrl } from "../constants";


export async function reserve (reserveInfo: {
  title: string
  tickets: number
  total: number
  seats: boolean
}) {
  let err: any = undefined;
  await axios
    .post(`${baseUrl}/reserva`, reserveInfo)
    .catch((error) => {
      err = error
      return undefined
    })
  if (err) {
    return [err.response.data.error, undefined];
  }
}

export async function pay(_paymentInfo: {
  boletos: number
  total: number
}) {
  console.log('pago')
}