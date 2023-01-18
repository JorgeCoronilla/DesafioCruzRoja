import React from 'react'
import { ReactComponent as LogoNav } from '../../media/logo.svg';

export const ProfileNavBar2 = ({setDisplay}) => {
   const inbox = () => {
    setDisplay("inbox")
  }

  return (
    <div>
    <div className='profileNavBar2'>
        <div><p >&#9776;</p></div>
        <div><h6 onClick={inbox}>NavBar 2</h6></div>
        <div><p>P</p></div>
    </div>
</div>
  )
}
