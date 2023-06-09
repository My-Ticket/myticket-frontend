import {
  ActionIcon,
  Rating,
  Button
} from '@mantine/core'
import { useState, useEffect } from 'react'
import '../reserva.css'
import { notifications } from '@mantine/notifications'
import { pay, reserve } from '../services/pay'
import { ConfirmationModal } from '../components/ConfirmationModal'


export const Reservation = () => {
  const precio = 15000
  const [boletos,setBoletos] = useState(0)
  const [sillas, setSillas] = useState(false)
  const rating = 3.5
  const [error, setError] = useState('')
  const [total, setTotal] = useState(0)
  const [open, setOpen] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  
  const Pelicula = {
    title: 'Rapidos y Furiosos X',
    clasificacion: '+12',
    director: 'Louis Leterrier',
    reparto: 'Vin Diesel, Jason Momoa, Jason Statham, Michelle Rodriguez, Charlize Theron, Tyrese Gibson, Chris "Ludacris" Bridges, Jordana Brewster, John Cena, Nathalie Emmanuel, Sung Kang, Scott Eastwood, Cardi B, Daniela Melchior, Brie Larson, Alan Ritchson y Rita Moreno.',
    poster: 'https://i.pinimg.com/originals/6e/71/52/6e7152aca33cfb764f8357dc6497e5bf.jpg',
    
  }
  
  useEffect(() => {
    setTotal(boletos * precio)
  },[boletos])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const err = reserve({
      titulo: Pelicula.title,
      boletos: boletos,
      total: total,
      sillas: sillas,
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
    setBoletos(0)
    setSillas(false)
    setTotal(0)
    setConfirmed(false)
  } 
  return (
    <div className='main'>
      <div className= 'poster'>
        <img  src={Pelicula.poster} alt="image"  />
        <Rating size='lg' value={rating} fractions={2} readOnly />
        <p>Calificación promedio: {rating}</p>
      </div>
      <div className='movie'>
        <div className= 'info'>
          <h1>Rapidos y Furiosos X</h1>
          <p><strong>Titulo: </strong> {Pelicula.title}</p>
          <p><strong>Clasificación: </strong> {Pelicula.clasificacion} </p>
          <p><strong>Reparto: </strong> {Pelicula.reparto}</p>
          <p><strong>Director: </strong> {Pelicula.director}</p>
        </div>
      <div className='reserva' >
        <div>
          <h2>Precio</h2>
          $ {precio}
        </div>
        <div>
          <h2>Boletos</h2>
          <p>
            <ActionIcon variant='outline' size='md' color= 'yellow' onClick={() => boletos > 0 && setBoletos(boletos - 1)}>
              -
            </ActionIcon>
            {boletos}
            <ActionIcon variant='outline' size='md' color='yellow' onClick={() => boletos < 10 && setBoletos(boletos + 1)}>
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
            onClick={() => setSillas(!sillas)}>Seleccionar sillas
          </Button>
        </div>
      </div>
        <div className='boton'>
          <Button variant='filled' color='yellow' size='lg'
            disabled = {boletos === 0 || sillas === false ? true : false}
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
        titulo: Pelicula.title,
        boletos: boletos,
        total: total,}} />
    </div>
  )
}