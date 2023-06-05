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
              
            <Grid.Col span={3}>
              <Moca title={"Transformers"} link={"https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg"} presale={true} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Duro de matar"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpVXKGjwHSAeEqBH3EjoBipDnB7azbLUX93bL7VHEAJmOnPXR6"} presale={true}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Enredados"} link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjiLiIFJaZSqEAtCCT0N1bw1_Wm9oJHVvHHASpr4qdg3TitCB"} presale={false}/>
            </Grid.Col>
            <Grid.Col span={3}>
            <Moca title={"Boogeyman"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbMtZfdH5eQC-YV_uDer35C-yoAPFrVMZWbeZMFTH-GuLf2ibj"} presale={false}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Rapido y Furioso"} link={"https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg"} presale={true}/>
            </Grid.Col>
          </Grid>
      </div>
    </div>
  )
}

export default Estreno