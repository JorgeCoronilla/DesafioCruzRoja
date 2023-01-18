import React from 'react'
import logo2 from '../../media/logoletrablanca.png'
import menu from '../../media/hamburguesa.svg';
export const ProfileNavBar2 = ({setDisplay}) => {
   const close = () => {
    setDisplay("list")
  }

  return (
    <div>
    <div className='profileNavBar4'>
    <div><p className='flecha' onClick={close}> &#10094;</p></div>
    <div><h6>Expertos</h6></div>
    <div><p className='iconLupa'></p></div>
             
    </div>

</div>
  )
}
