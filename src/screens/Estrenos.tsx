import { Moca } from '../components/MovieCard'
import { Center, Grid} from '@mantine/core';

export function Estreno() {
  return (
    <div>
      <div style={{marginTop: '5em'}}>
        <Center>
        <h1>PRÓXIMAMENTE...</h1>
        </Center>
          <Grid justify='center' align='stretch' style={{
            marginInline: '5em',
          }} >
              {
                // TODO: Implement estrenos from backend
              }
          </Grid>
      </div>
    </div>
  )
}

export default Estreno