import React, { useContext } from 'react'
import { CreateProfileContext } from '../providers/createProfileContext';

export const ProfileNavBar3 = () => {
  const { display, setDisplay, user  } = useContext(CreateProfileContext);
  const close = () => {
    setDisplay("main")
  }

  return (
    <div>
    <div className='profileNavBar3'>
    <div><p className='flecha' onClick={close}> &#10094;</p></div>
    <div><h6>Expertos</h6></div>
    <div><p className='iconLupa'></p></div>
    </div>
</div>
  )
}
