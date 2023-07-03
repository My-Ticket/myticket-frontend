import { Moca } from '../components/MovieCard'
import { Center, Grid, Loader} from '@mantine/core';
import { Caro } from '../components/Carousel';
import { billBoardMockData } from "../util/mockData"
import { useSetRecoilState } from 'recoil';
import { MoviesState } from '../state/reservationState';
import { useNavigate } from 'react-router-dom';
import {nanoid} from "nanoid";
import useSWR from 'swr';
import { baseUrl } from '../constants';
import fetchWithAuth from '../util/fetchWithAuth';
import { MovieDetails } from '../types';
import getImageLink from '../util/getImageLink';
export function Billboard() {
  const setReserveMovie = useSetRecoilState(MoviesState)
  const { data, isLoading } = useSWR(`${baseUrl}/content/movies/billboard`, fetchWithAuth)
  const navigate = useNavigate()
  return (
    <div>
      <div style={{ height: '25em'}}>
        <Caro />
      </div>
      <div style={{
        marginTop: '18em',
      }}>
        <Center>

        <h1>CARTELERA</h1>
        </Center>
        {isLoading && <Center><Loader variant='bars'/></Center>}
          <Grid justify='center' align='stretch' style={{
            marginInline: '5em',
          }} >

            {
              data && data.map((movie: MovieDetails) => {
                return (
                  <Grid.Col key={nanoid()} span={3}>
                    <Moca  title={movie.title} link={getImageLink(movie.posterPath)} sinopsis={movie.overview}  onReserveClick ={() => {setReserveMovie(movie); navigate("/reserva")}}/>
                  </Grid.Col>
                )
              })
            }
          </Grid>
      </div>
    </div>
  )
}

export default Billboard