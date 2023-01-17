import React, { useState, useContext, useEffect } from 'react'
import { ReactComponent as Heart } from '../../media/heart.svg';
import { defaultFetch } from '../../helpers/defaultHelpers';
import { CreateProfileContext } from '../providers/createProfileContext';
import Cookies from 'universal-cookie';
import { BsFillCaretLeftSquareFill } from 'react-icons/bs';

export const Favs = () => {
    const cookies = new Cookies();
    var session = cookies.get("session");
    const { display, setDisplay, user, setUser, channelId, setChannelId, currentUser } = useContext(CreateProfileContext);
    const profileId = parseInt(localStorage.getItem('currentProfileId'))
    const [favD, setFavD] = useState()
    const [recipient, setRecipient] = useState()
    console.log(favD)
    const handleFav = (e) => {
        e.preventDefault();
        setFavD(!favD)
        setRecipient(e.currentTarget.parentElement.id)
        console.log(favD)
    }
  
    useEffect(() => {

        if (favD) {
            let newFav = {
                sender: profileId,
                recipient: recipient
            }
            const res = defaultFetch("http://localhost:3001/fav", "POST", newFav)
        } else if (favD !== undefined ){
            let fav = {
                sender: profileId,
                recipient: recipient
            }
            const res = defaultFetch("http://localhost:3001/unfav", "POST", fav)
        }
    }, [favD, recipient])

    return (
        <div onClick={handleFav} className={favD ? "favorite" : "unfav"}>
            <Heart />
        </div>
    )
}
