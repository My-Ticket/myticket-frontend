import useSWR from 'swr';
import { Moca } from '../components/MovieCard'
import { Center, Grid, Loader} from '@mantine/core';
import { baseUrl } from '../constants';
import fetchWithAuth from '../util/fetchWithAuth';
import { MovieDetails } from '../types';
import getImageLink from '../util/getImageLink';

export function Estreno() {
  const { data, isLoading } = useSWR(`${baseUrl}/content/movies/upcoming`, fetchWithAuth)
  return (
    <div>
      <div style={{marginTop: '5em'}}>
        <Center>
        <h1>PRÓXIMAMENTE...</h1>
        </Center>
        {isLoading && <Center><Loader variant='bars'/></Center>}
          <Grid justify='center' align='stretch' style={{
            marginInline: '5em',
          }} >
            {
              data && data.map((movie: MovieDetails) => {
                return (
                  <Grid.Col key={movie.id} span={3}>
                    <Moca  title={movie.title} link={getImageLink(movie.posterPath)} sinopsis={movie.overview} />
                  </Grid.Col>
                )
              })
            } 
          </Grid>
      </div>
    </div>
  )
}

export default Estreno