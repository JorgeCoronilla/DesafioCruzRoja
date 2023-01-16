import React, { useContext } from 'react'
import { CreateProfileContext } from '../providers/createProfileContext';

export const ProfileNavBar3 = () => {
  const { display, setDisplay, user  } = useContext(CreateProfileContext);
  const close = () => {
    setDisplay("firstView")
  }

  return (
    <div>
    <div className='profileNavBar3'>
    <div><p onClick={close}> &#10094;</p></div>
        <div><h6>{user.user_name}</h6></div>
        <div><p>P</p></div>
    </div>
</div>
  )
}
