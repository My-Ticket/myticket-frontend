import { Moca } from '../components/MovieCard'
import { Center, Grid} from '@mantine/core';
import { Caro } from '../components/Carousel';
import { billBoardMockData } from "../util/mockData"
import { useSetRecoilState } from 'recoil';
import { MoviesState } from '../state/reservationState';
import { useNavigate } from 'react-router-dom';
export function Billboard() {
  const setReserveMovie = useSetRecoilState(MoviesState)
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
          <Grid justify='center' align='stretch' style={{
            marginInline: '5em',
          }} >

            {
              billBoardMockData.map((movie) => {
                return (
                  <Grid.Col span={3}>
                    <Moca title={movie.title} link={movie.poster} sinopsis={movie.sinopsis}  onReserveClick ={() => {setReserveMovie(movie); navigate("/reserva")}}/>
                  </Grid.Col>
                )
              })
            }
              
            {/* <Grid.Col span={3}>
              <Moca title={"Transformers"} link={"https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Duro de matar"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpVXKGjwHSAeEqBH3EjoBipDnB7azbLUX93bL7VHEAJmOnPXR6"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Enredados"} link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjiLiIFJaZSqEAtCCT0N1bw1_Wm9oJHVvHHASpr4qdg3TitCB"} />
            </Grid.Col>
            <Grid.Col span={3}>
            <Moca title={"Boogeyman"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbMtZfdH5eQC-YV_uDer35C-yoAPFrVMZWbeZMFTH-GuLf2ibj"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Rápido y furioso"} link={"https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Duro de matar"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpVXKGjwHSAeEqBH3EjoBipDnB7azbLUX93bL7VHEAJmOnPXR6"} />
            </Grid.Col>
            <Grid.Col span={3}>
            <Moca title={"Boogeyman"} link={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbMtZfdH5eQC-YV_uDer35C-yoAPFrVMZWbeZMFTH-GuLf2ibj"} />
            </Grid.Col>
            <Grid.Col span={3}>
              <Moca title={"Enredados"} link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjiLiIFJaZSqEAtCCT0N1bw1_Wm9oJHVvHHASpr4qdg3TitCB"} />
            </Grid.Col> */}
          </Grid>
      </div>
    </div>
  )
}

export default Billboard