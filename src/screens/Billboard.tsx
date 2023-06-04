import { Moca } from '../components/MovieCard'
import { Center, Container, Grid, SimpleGrid, rem } from '@mantine/core';
import { Caro } from '../components/Carousel';

export function Billboard() {
  return (
    <div>
      <div style={{ height: '25em', display: 'flex' }}>
        <Caro />
      </div>
      <div>
        <h1>CARTELERA</h1>
          <Grid justify='center' align='stretch' style={{
            marginInline: '5em',
          }} >
              
            <Grid.Col span={3}>
              <Moca title={"Transformers: El Despertar De Las Bestias"} link={"https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Duro de mamar"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpVXKGjwHSAeEqBH3EjoBipDnB7azbLUX93bL7VHEAJmOnPXR6"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Rasputiel"} link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjiLiIFJaZSqEAtCCT0N1bw1_Wm9oJHVvHHASpr4qdg3TitCB"} />
            </Grid.Col>
            <Grid.Col span={3}>
            <Moca title={"The Bug-Man (Kahyberth)"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbMtZfdH5eQC-YV_uDer35C-yoAPFrVMZWbeZMFTH-GuLf2ibj"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Rapido y Mafioso"} link={"https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Duro de mamar"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpVXKGjwHSAeEqBH3EjoBipDnB7azbLUX93bL7VHEAJmOnPXR6"} />
            </Grid.Col>
            <Grid.Col span={3}>
            <Moca title={"The Bug-Man (Kahyberth)"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbMtZfdH5eQC-YV_uDer35C-yoAPFrVMZWbeZMFTH-GuLf2ibj"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Rasputiel"} link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjiLiIFJaZSqEAtCCT0N1bw1_Wm9oJHVvHHASpr4qdg3TitCB"} />
            </Grid.Col>
          </Grid>
      </div>
    </div>
  )
}

export default Billboard