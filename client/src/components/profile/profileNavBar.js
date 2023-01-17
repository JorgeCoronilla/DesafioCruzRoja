import React, { useContext } from 'react'
import { CreateProfileContext } from '../providers/createProfileContext';
import { ReactComponent as Lupa } from '../../media/lupa.svg';

export const ProfileNavBar = () => {
  const { display, setDisplay  } = useContext(CreateProfileContext);

  return (
    <div>
    <div className='profileNavBar'>
    <div><p className='flecha'> &#10094;</p></div>
    <div><h6>Expertos</h6></div>
    <div><p className='iconLupa'><Lupa/></p></div>
             
    </div>

</div>
  )
}
