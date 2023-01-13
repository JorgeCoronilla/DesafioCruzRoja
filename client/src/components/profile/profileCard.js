import React, { useContext, useEffect } from 'react'
import { defaultFetch } from '../../helpers/defaultHelpers';
import { CreateProfileContext } from '../providers/createProfileContext';
import Cookies from 'universal-cookie';
export const ProfileCard = () => {
  const cookies = new Cookies();
  var session = cookies.get("session");
  const { showCard, setShowCard, user, setUser, channelId, setChannelId } = useContext(CreateProfileContext);
  const profileId = parseInt(localStorage.getItem('currentProfileId'))

  const firstMessage = () => {
   
   defaultFetch(`http://localhost:3001/msg/create_channel`, "post",
    {token: session, recipient:profileId})
    .then((res) => {
        localStorage.setItem('currentChannelId', res.channelID)
        setShowCard("firstContact");
    })
  }


  return (
    <div>
      <div className='profile'>
       <img className='profilePic' src={user.pic} alt="user 1" />
        <p>{user.user_name}</p>
        <p><span>22 reseñas</span></p>

        <div className='profileBtns'>
          <button className='registerBtn' >55 personas han recibido su ayuda</button>
          <button className='registerBtn' onClick={firstMessage}>enviar mensaje</button>
        </div>

        <div className='aboutMe'>
          <h4>Acerca de mí</h4>
          <p>{user.about_me}</p>
        </div>
        <p>Habla árabe</p>
      </div>
    </div>
  )
}
