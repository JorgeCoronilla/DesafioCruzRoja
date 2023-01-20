import React from 'react'
import { ReactComponent as Lupa } from '../../media/lupa.svg';

export const ProfileNavBar = ({setDisplay}) => {
  const close = () =>{setDisplay('main')}
  return (
    <div>
    <div className='profileNavBar'>
    <div><p className='flecha' onClick={close}> &#10094;</p></div>
    <div><h6>Expertos</h6></div>
    <div><p className='iconLupa'><Lupa/></p></div>
             
    </div>

</div>
  )
}
