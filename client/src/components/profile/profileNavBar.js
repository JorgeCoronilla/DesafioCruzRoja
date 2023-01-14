import React, { useContext } from 'react'
import { CreateProfileContext } from '../providers/createProfileContext';

export const ProfileNavBar = () => {
  const { showCard, setShowCard  } = useContext(CreateProfileContext);


  return (
    <div>
    <div className='profileNavBar'>
        <div><p >&#9776;</p></div>
        <div><h6>Inmi</h6></div>
        <div><p>P</p></div>
    </div>

</div>
  )
}
