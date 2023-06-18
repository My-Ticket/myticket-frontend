import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export function Caro() {
  const autoplay = useRef(Autoplay({ delay: 3000}))
  console.log('cualuqier cosa')

  return (
    <Carousel 
      sx={{flex:1}}
      mx="auto"
      height='40em'
      draggable={false}
      plugins={[autoplay.current]}
      withControls={false}
    >
      <Carousel.Slide>
        <img
          src='https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2019/05/estas-fueron-las-peliculas-mas-vistas-cartelera-cine-venezolana_282237.jpg'
          alt='Prom1'
          style={{width:'100%', height:'100%', objectFit:'cover'}}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src='https://www.020mag.com/files/images/2019/06/img_11795_johnwick2.png'
          alt='Prom2'
          style={{width:'100%', height:'100%', objectFit:'cover'}}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src='https://es.web.img3.acsta.net/pictures/23/03/02/15/44/3426926.jpg'
          alt='Prom3'
          style={{width:'100%', height:'100%', objectFit:'cover'}}
        />
      </Carousel.Slide>
    </Carousel>
  );
}