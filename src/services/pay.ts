import axios, { AxiosError } from "axios";
import { baseUrl } from "../constants";


export async function reserve (reserveInfo: {
  titulo: string
  boletos: number
  total: number
  sillas: boolean
}) {
  let err: any = undefined;
  const res = await axios
    .post(`${baseUrl}/reserva`, reserveInfo)
    .catch((error) => {
      err = error
      return undefined
    })
  if (err) {
    return [err.response.data.error, undefined];
  }
}

export async function pay(paymentInfo: {
  boletos: number
  total: number
}) {
  console.log('pago')
}