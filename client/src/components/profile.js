import React, { useContext, useState, useEffect } from 'react'
import { defaultFetch } from '../helpers/defaultHelpers';
import { Firstcontact } from './profile/FirstContact';
import { ProfileCard } from './profile/profileCard';
import { ProfileNavBar } from './profile/profileNavBar'
import { ProfileNavBar2 } from './profile/ProfileNavBar2';
import { ProfileNavBar3 } from './profile/profileNavBar3';
import { CreateProfileContext } from './providers/createProfileContext'
import Cookies from 'universal-cookie';

export const Profile = () => {
    const cookies = new Cookies();
    const [showCard, setShowCard] = useState("firstView");
    const [profileId, setProfileId] = useState(3);
    var session = cookies.get("session");
    const [user, setUser] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [channelId, setChannelId] = useState();

    useEffect(() => {
        const idq = 2;
        localStorage.setItem('currentProfileId', JSON.stringify(idq))
        let user = { id: profileId, token: session }
        console.log(session)
        defaultFetch(`http://localhost:3001/get_user`, "post",
            user)
            .then((res) => {
                console.log(res);
                setUser(res)
            })

            defaultFetch(`http://localhost:3001/get_current_user`, "post",
            {token: session})
            .then((res) => {
                console.log(res);
                setCurrentUser(res)
            })
    }, [])


    return (
        <CreateProfileContext.Provider value={{ showCard, setShowCard, user, setUser, channelId, setChannelId }}>
            {(showCard === "firstView" && user) &&
                <div>
                    <ProfileNavBar />
                    <ProfileCard />
                </div>
            }
            {(showCard === "firstContact" && user) &&
                <div>
                    <ProfileNavBar2 />
                    <ProfileNavBar3 />
                    <Firstcontact />
                </div>
            }
        </CreateProfileContext.Provider>

    )
}
