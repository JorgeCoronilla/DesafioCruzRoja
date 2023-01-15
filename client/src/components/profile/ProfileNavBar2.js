import React, { useContext } from 'react'
import { CreateProfileContext } from '../providers/createProfileContext';

export const ProfileNavBar2 = () => {
  const { showCard, setShowCard  } = useContext(CreateProfileContext);


  return (
    <div>
    <div className='profileNavBar2'>
        <div><p >&#9776;</p></div>
        <div><h6>NavBar 2</h6></div>
        <div><p>P</p></div>
    </div>
</div>
  )
}
