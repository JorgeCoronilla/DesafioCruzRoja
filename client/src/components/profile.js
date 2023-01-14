import React, { useContext, useState, useEffect } from 'react'
import { defaultFetch } from '../helpers/defaultHelpers';
import { Firstcontact } from './profile/FirstContact';
import { ProfileCard } from './profile/profileCard';
import { ProfileNavBar } from './profile/profileNavBar'
import { ProfileNavBar2 } from './profile/ProfileNavBar2';
import { ProfileNavBar3 } from './profile/profileNavBar3';
import { CreateProfileContext } from './providers/createProfileContext'
import Cookies from 'universal-cookie';
import { CardOnList } from './profile/cardOnList';

export const Profile = () => {
    const cookies = new Cookies();
    const [showCard, setShowCard] = useState("firstView");
    const [profileId, setProfileId] = useState();
    var session = cookies.get("session");
    const [user, setUser] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [channelId, setChannelId] = useState();
    const [usersList, setUserList] = useState();

    useEffect(() => {
        const idq = 2;
        setProfileId(idq)
        localStorage.setItem('currentProfileId', JSON.stringify(idq))
        let user = { id: idq, token: session }
        console.log(session)
        defaultFetch(`http://localhost:3001/get_user`, "post",
            user)
            .then((res) => {
                setUser(res)
            })

        defaultFetch(`http://localhost:3001/get_current_user`, "post",
            { token: session })
            .then((res) => {
                setCurrentUser(res)
            })

        defaultFetch(`http://localhost:3001/get_users`, "post",
            user)
            .then((res) => {
                setUserList(res)
            })
    }, [])


    return (
        <CreateProfileContext.Provider value={{ showCard, setShowCard, user, setUser, channelId, setChannelId, currentUser, usersList }}>
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
            {(showCard === "list" && user) &&
                <div>
                    <ProfileNavBar />
                    <CardOnList />
                </div>
            }
        </CreateProfileContext.Provider>

    )
}
