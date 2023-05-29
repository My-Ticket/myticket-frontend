import { Moca } from '../components/MovieCard'
import { Container, Grid, rem } from '@mantine/core';

export function Billboard() {
  return (
  <div>
      <div>
      <h1>CARTELERA</h1>
      <Container>
       <Grid justify='center'>
        <Grid.Col span={4} style={{ minHeight: rem(80) }}> <Moca/> </Grid.Col>
         <Grid.Col span={4} style={{ minHeight: rem(80) }}> <Moca/>  </Grid.Col>
         <Grid.Col span={4} style={{ minHeight: rem(80) }}> <Moca/>  </Grid.Col>
         <Grid.Col span={4} style={{ minHeight: rem(80) }}> <Moca/>  </Grid.Col>
       </Grid>
      </Container>
    </div>
  </div>
  )
}

export default Billboard