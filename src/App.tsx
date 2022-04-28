import React, { useEffect, useState } from 'react';
import './App.css';
import ListadoPeliculas from './peliculas/ListadoPeliculas';
import { landingPageDTO } from './peliculas/peliculas.model';
import Button from './utils/Button';


function App() {

  const [peliculas, setPeliculas] = useState<landingPageDTO>({})


  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1, titulo: 'Iron Man 2',
            poster: 'https://4.bp.blogspot.com/_TQCLHGDzYfA/S9qIE7ccaqI/AAAAAAAAB9w/aXUzG4SorR0/s1600/IM2_poster.jpg'
          },
          {
            id: 2, titulo: 'Rapido y furioso',
            poster: 'https://static.cinepolis.com/resources/mx/movies/posters/414x603/34669-453300-20210622125843.jpg'
          }
        ],
        proximosEstrenos: [
          {
            id: 3, titulo: 'soul',
            poster: 'https://lumiere-a.akamaihd.net/v1/images/postersoul_footer_8642e89f.png'
          }
        ]
      })
    }, 1000);
    return () => clearTimeout(timerId)
  })

  return (
    <>
      <div className='container'>

        <Button>Boton</Button>

        <h3>En cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />

        <h3>Proximos estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>
    </>
  );
}

export default App;
