import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Error404 = () => {

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  }
  return (
    <div className='error404'>
      <h5>Error404</h5>
      <h6>Parece que ha ocurrido algo :(</h6>
      <p onClick={home}>Llévame al inicio!</p>
    </div>
  )
}
