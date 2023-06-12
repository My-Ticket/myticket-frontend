import { atom } from 'recoil'
import { Movie } from '../screens/Reservation'

export const MoviesState = atom<Movie | undefined>({
    default: undefined,
    key: 'movies_state'
})