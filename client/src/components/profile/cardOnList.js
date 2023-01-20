import React, { useContext, useState } from 'react'
import { ReactComponent as Heart } from '../../media/heart.svg';
import { CreateProfileContext } from '../providers/createProfileContext';
import Cookies from 'universal-cookie';

export const CardOnList = ({setDisplay}) => {

    const { usersList, refresh, setRefresh } = useContext(CreateProfileContext);
    const cookies = new Cookies();
    var session = cookies.get("session");
    const [favD, setFavD] = useState([]);
    const profileId = parseInt(localStorage.getItem('currentProfileId'))
    
    const checkUser = (e) => {
        localStorage.setItem('currentProfileId', e.target.id);
        setDisplay("firstView");
        setRefresh(!refresh)
    }
    // console.log(favD)
    return (
        <div>
            <div className='profile'  >
                <button className='filter'>Filtrar</button>
                <p>344 personas encontradas que te pueden ayudar</p>
                {usersList.map((user, index) => {
                    return (
                        <div className='cardBack'  key={index}>
                            <div>
                                <div className={user.user_id % 2 === 0? "favorite": "unfav"}  >
                                    <Heart />
                                </div>
                                <img id={user.user_id} className='cardPic' src={user.pic} alt="user 1" onClick={checkUser} />
                            </div>
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
