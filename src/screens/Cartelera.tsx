import { Moca } from '../components/MovieCard'
import { Center, Grid} from '@mantine/core';
import { Caro } from '../components/Carousel';

export function Billboard() {
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
          <Grid justify='center' align='stretch' style={{
            marginInline: '5em',
          }} >
              
            <Grid.Col span={3}>
              <Moca title={"Rápido y que tales"} link={"https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg" } presale={false}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Duro de matar"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpVXKGjwHSAeEqBH3EjoBipDnB7azbLUX93bL7VHEAJmOnPXR6"} presale={false}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Enredados"} link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjiLiIFJaZSqEAtCCT0N1bw1_Wm9oJHVvHHASpr4qdg3TitCB"} presale={false}/>
            </Grid.Col>
            <Grid.Col span={3}>
            <Moca title={"Boogeyman"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbMtZfdH5eQC-YV_uDer35C-yoAPFrVMZWbeZMFTH-GuLf2ibj"} presale={false}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Transdeformes"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0kH5Db-LlHj2mSnpYmr8GOnGTzVJc5c3M5Dne1R3Yl1YralEq"} presale={false}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Spiderman spiderverso"} link={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBLKcm8i9LQcVWn18C5CdVYbYGGk8SrZ_Ut1jzFAP6dY1WfdAi"} presale={false}/>
            </Grid.Col>
            <Grid.Col span={3}>
            <Moca title={"La sirenita"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHGbBl5Ka9dwQX0_m5MJWJk_FVmjhiIylmiEPZV0ifpmo5xUKS"} presale={false}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Relleno"} link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKJ9-cENm8YgVicSU9xoLBfkU4lScyYRQBTi_P2yPzU9Chhsu"} presale={false}/>
            </Grid.Col>
          </Grid>
      </div>
    </div>
  )
}

export default Billboard