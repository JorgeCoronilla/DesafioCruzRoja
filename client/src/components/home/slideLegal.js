import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
export const SlideLegal = () => {
  return (
    <div>

      <div className='slideContainer legal'>
        <div className='slideTitle'>
          <h2>Recomendados en ayuda legal</h2>
        </div>
        <div className='slideText'>
          <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
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
            <img className='thumbnail' src="http://localhost:3001/pics/image1.jpg" alt="user 1" />
            <h3>Marta Gonzalez</h3>
          </SplideSlide>
          <SplideSlide>
            <img className='thumbnail' src="http://localhost:3001/pics/image2.jpg" alt="user 2" />
            <h3>Ayat Hassan</h3>
          </SplideSlide>
          <SplideSlide>
            <img className='thumbnail' src="http://localhost:3001/pics/image3.jpg" alt="user 3" />
          </SplideSlide>
        </Splide>
        
      </div>
    </div >
  )
}
