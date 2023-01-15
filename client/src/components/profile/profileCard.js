import React, { useContext, useEffect } from 'react'
import { defaultFetch } from '../../helpers/defaultHelpers';
import { CreateProfileContext } from '../providers/createProfileContext';
import Cookies from 'universal-cookie';
export const ProfileCard = () => {
  const cookies = new Cookies();
  var session = cookies.get("session");
  const { showCard, setShowCard, user, setUser, channelId, setChannelId, currentUser } = useContext(CreateProfileContext);
  const profileId = parseInt(localStorage.getItem('currentProfileId'))

  const firstMessage = () => {

    defaultFetch(`http://localhost:3001/msg/check_channel`, "post",
      { currentProfileId: profileId, token: session })
      .then((res) => {
        if (res) {
          localStorage.setItem('currentChannelId', res.id)
          setShowCard("firstContact");
        } else {
          defaultFetch(`http://localhost:3001/msg/create_channel`, "post",
            { token: session, 
              recipient: profileId , 
              sendPic:  currentUser.pic, 
              sendName: currentUser.user_name, 
              recPic: user.pic, 
              recName: user.user_name})
            .then((res) => {
              localStorage.setItem('currentChannelId', res.channelID)
              setShowCard("firstContact");
            })
        }
      })
  }

const list = () =>{
  console.log("Entra")
  setShowCard("list");
}
  return (
    <div>
      <div className='profile'>
        <div className='profileCont1'>


          <img className='profilePic' src={user.pic} alt="user 1" />
          <h3>{user.user_name}</h3>
          <h5>22 reseñas Verificado</h5>

          <div className='profileBtns'>
            
            <button className='loginBtn' onClick={list}>55 personas han recibido su ayuda</button>
            <button className='signinBtn2' onClick={firstMessage}>enviar mensaje</button>

          </div>
        </div>

        <div className='aboutMe'>
          <h4>Acerca de mí</h4>
          <h6>{user.about_me}</h6>
          <p>Habla árabe</p>
        </div>
      </div>
    </div>
  )
}
