import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
export const SlideEmotional = () => {
  return (
    <div>

      <div className='slideContainer emotional'>
        <div className='slideTitle'>
          <h2>¿Necesitas apoyo en tu proceso de llegada e integración?</h2>
        </div>
        <div className='slideText'>
          <p>Aquí encontrarás personas dispuestas a escucharte y ayudarte. Contacta con ellas.</p>
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
