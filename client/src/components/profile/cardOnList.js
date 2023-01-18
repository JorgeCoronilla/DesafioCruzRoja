import React, { useContext, useEffect, useState } from 'react'
import { ReactComponent as Heart } from '../../media/heart.svg';
import { defaultFetch, getFetch } from '../../helpers/defaultHelpers';
import { CreateProfileContext } from '../providers/createProfileContext';
import Cookies from 'universal-cookie';
import { Favs } from './favs';
import { BsFillBadgeVoFill } from 'react-icons/bs';

export const CardOnList = () => {
    const cookies = new Cookies();
    var session = cookies.get("session");
    const { usersList, setDisplay, refresh, setRefresh } = useContext(CreateProfileContext);
    const [favD, setFavD] = useState([]);
    const profileId = parseInt(localStorage.getItem('currentProfileId'))
    
    // useEffect(() => {
    //     const fetchData = async (req,res) => {
    //     const data = await fetch(`http://localhost:3001/getfavs/${profileId}`);
    //     const json = await data.json();
    //     let userFavs = Object.values(json)
    //     console.log(userFavs)
    // }
    //     fetchData()
    //         .catch(console.error);
    // }, [])
    
    const checkUser = (e) => {
        localStorage.setItem('currentProfileId', e.target.parentElement.id);
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
                        <div className='cardBack' key={index}>
                            <div id={user.user_id}>
                                <div className="unfav" >
                                    <Heart />
                                </div>
                                <img className='cardPic' src={user.pic} alt="user 1" onClick={checkUser} />
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

/*

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
*/