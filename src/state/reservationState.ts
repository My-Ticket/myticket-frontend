import { atom } from 'recoil'
import { MovieDetails } from '../types'

export const MoviesState = atom<MovieDetails | undefined>({
    default: undefined,
    key: 'movies_state'
})