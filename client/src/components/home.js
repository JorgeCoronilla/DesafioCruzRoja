import React, { useState } from 'react'
import { CreateHomeContext } from './providers/createHomeContext'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const Home = () => {
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState("");
  const [display, setDisplay] = useState("main");



  return (
    <CreateHomeContext.Provider value={{ display, setDisplay, message, setMessage, showAlert, setShowAlert }}>
      <div className='homeContainer'>
        <div className='homeSection1'>
          <h2>Encuentra a una<br />persona que te<br />pueda ayudar</h2>
          <div className='submitContainer'>
            <div className='handsicon'></div>
            <div className='submitText'>¿En qué necesitas ayuda?</div>
            <div className='findicon'></div>
          </div>
        </div>
      </div>
      <div className='slideContainer'>
        <h2>Recomendados en ayuda emocional</h2>
        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
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
            <img className='thumbnail' src="image1.jpg" alt="user 1" />
            <h3>Marta Gonzalez</h3>
          </SplideSlide>
          <SplideSlide>
            <img className='thumbnail' src="image2.jpg" alt="user 2" />
            <h3>Ayat Hassan</h3>
          </SplideSlide>
          <SplideSlide>
            <img className='thumbnail' src="image3.jpg" alt="user 3" />
          </SplideSlide>
        </Splide>
      </div> 


    </CreateHomeContext.Provider>

  )
}
