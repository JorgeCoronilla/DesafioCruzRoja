import React, { useContext } from 'react'
import { CreateProfileContext } from '../providers/createProfileContext';

export const ProfileNavBar = () => {
  const { display, setDisplay  } = useContext(CreateProfileContext);


  return (
    <div>
    <div className='profileNavBar'>
        <div><h6>Inmi</h6></div>
        <div><p >&#9776;</p></div>
    </div>

</div>
  )
}
