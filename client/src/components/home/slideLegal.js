import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
export const SlideLegal = () => {
  return (
    <div>

      <div className='slideContainer legal'>
        <div className='slideTitle'>
          <h2>Ellos pueden orientarte a enfocar tu vida laboral</h2>
        </div>
        <div className='slideText'>
          <p>Nuestra comunidad te puede asesorar en el proceso de búsqueda de trabajo.</p>
        </div>
        <Splide
          options={{
            type: 'loop',
            autoplay: true,
            width: '100%',
            rewind: true,
            gap: '3rem',
            autoWidth: true,
            perPage: 2,
          }}
          aria-label="Recomendados"
        >
          Autoplay#play()
          <SplideSlide>
            <img className='thumbnail' src="../image1.jpg" alt="user 1" />
            <h3>Marta Gonzalez</h3>
          </SplideSlide>
          <SplideSlide>
            <img className='thumbnail' src="../image2.jpg" alt="user 2" />
            <h3>Ayat Hassan</h3>
          </SplideSlide>
          <SplideSlide>
            <img className='thumbnail' src="../image3.jpg" alt="user 3" />
            <h3>Yasmina Boujti</h3>
          </SplideSlide>
        </Splide>
        
      </div>
    </div >
  )
}
