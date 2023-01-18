import React, { useContext } from 'react'

import { CreateProfileContext } from '../providers/createProfileContext';

export const CardOnList = ({setDisplay}) => {

    const { usersList, refresh, setRefresh } = useContext(CreateProfileContext);
    const checkUser = (e) => {
        localStorage.setItem('currentProfileId', e.target.id);
       setDisplay("firstView");
       setRefresh(!refresh)
    }
    return (
        <div>
        <div className='profile'  >
            <button className='filter'>Filtrar</button>
            <p>344 personas encontradas que te pueden ayudar</p>
            {usersList.map((user, index) => {
                return (
                    <div className='cardBack' key={index} >
                        <img className='cardPic' src={user.pic} alt="user 1" onClick={checkUser} id={user.user_id}/>
                        <h3>{user.user_name}</h3>
                        <h5>22 reseñas</h5>
                        <h4>Habla español e inglés</h4>
                        <h6>{user.about_me}</h6>
                    </div>
                )
            })}
        </div>
    </div>
      
    )
}
