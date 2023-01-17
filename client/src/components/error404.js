import React from 'react'
import { useNavigate } from 'react-router-dom'
import img404 from '../media/404.png'

export const Error404 = () => {

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  }
  return (
    <div>
      <div className='error404'>
        <h5>Oops!</h5>
        <h6>No podemos encontrar esta página. Click aquí para volver a la Home.</h6>
        <button onClick={home}>Volver a la home</button>

      </div>

      <img className='img404' src={img404} alt="404 error" />
    </div>
  )
}
