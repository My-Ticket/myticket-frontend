import {
  ActionIcon,
  Rating,
  Button
} from '@mantine/core'
import { useState, useEffect } from 'react'
import './Reservation.css'
import { notifications } from '@mantine/notifications'
import { pay, reserve } from '../services/pay'
import { ConfirmationModal } from '../components/ConfirmationModal'
import { useRecoilValue } from 'recoil'
import { MoviesState } from '../state/reservationState'

export interface Movie{
  title: string,
  classification: string,
  director: string,
  crew: string,
  poster: string
}

export const Reservation = () => {
  const movie = useRecoilValue(MoviesState)
  const price = 15000
  const [boletos,setTickets] = useState(0)
  const [seats, setSeats] = useState(false)
  const rating = 3.5
  // const [error, setError] = useState('')
  const [total, setTotal] = useState(0)
  const [open, setOpen] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  
  useEffect(() => {
    setTotal(boletos * price)
  },[boletos])

  const handleSubmit = async (e: any) => {
    if (movie === undefined) return
    e.preventDefault()
    // ?????
    const err = reserve({
      title: movie.title,
      tickets: boletos,
      total: total,
      seats: seats,
    })
    // if (err) {
    //   notifications.show({
    //     color: "red",
    //     title: "Error",
    //     message: "No se pudo realizar la reserva",
    //   })
    // } else {
    //   notifications.show({
    //     color: "green",
    //     title: "Confirmación",
    //     message: "Reserva realizada con éxito",
    //   })
    setOpen(true)
  }

  const handleCloseConfirm = () => {
    setOpen(false)
    setTickets(0)
    setSeats(false)
    setTotal(0)
    setConfirmed(false)
  } 
  return (
    <div className='main'>
      <div className= 'poster'>
        <img  src={movie!.poster} alt="image"  />
        <Rating size='lg' value={rating} fractions={2} readOnly />
        <p>Calificación promedio: {rating}</p>
      </div>
      <div className='movie'>
        <div className= 'info'>
          <h1>Rapidos y Furiosos X</h1>
          <p><strong>Titulo: </strong> {movie!.title}</p>
          <p><strong>Clasificación: </strong> {movie!.classification} </p>
          <p><strong>Reparto: </strong> {movie!.crew}</p>
          <p><strong>Director: </strong> {movie!.director}</p>
        </div>
      <div className='reserva' >
        <div>
          <h2>Precio</h2>
          $ {price}
        </div>
        <div>
          <h2>Boletos</h2>
          <p>
            <ActionIcon variant='outline' size='md' color= 'yellow' onClick={() => boletos > 0 && setTickets(boletos - 1)}>
              -
            </ActionIcon>
            {boletos}
            <ActionIcon variant='outline' size='md' color='yellow' onClick={() => boletos < 10 && setTickets(boletos + 1)}>
              +
            </ActionIcon>
          </p>
          
        </div>
        <div>
          <h2>Total</h2>
          $ {total}
        </div>
        <div className='boton'>
          <Button variant='filled' color='yellow' size='md' 
            onClick={() => setSeats(!seats)}>Seleccionar sillas
          </Button>
        </div>
      </div>
        <div className='boton'>
          <Button variant='filled' color='yellow' size='lg'
            disabled = {boletos === 0 || seats === false ? true : false}
            sx={{ '&[disabled]': { pointerEvents: 'all' } }}
            onClick={handleSubmit}
          >
          Reservar
          </Button>
        </div>  
      </div>
      <ConfirmationModal isOpen={open} confirmed={confirmed} onClose={handleCloseConfirm}
       onConfirm={() => setConfirmed(true)}
       details={{
        titulo: movie!.title,
        boletos: boletos,
        total: total,}} />
    </div>
  )
}