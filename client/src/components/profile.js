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
import { Inbox } from './profile/inbox';

export const Profile = () => {
    const cookies = new Cookies();
    const [showCard, setShowCard] = useState("firstView");
    const [profileId, setProfileId] = useState();
    var session = cookies.get("session");
    const [user, setUser] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [channelId, setChannelId] = useState();
    const [usersList, setUserList] = useState();
    const [refresh, setRefresh] = useState(false);
    const [channelsAct, setChannelsAct] = useState();
    const [channelsArc, setChannelsArc] = useState();
    var idq;
    useEffect(() => {
        idq = parseInt(localStorage.getItem('currentProfileId'))
       console.log(idq)
        if (idq){ let user = { id: idq, token: session }
        console.log(session)
        defaultFetch(`http://localhost:3001/get_user`, "post",
            user)
            .then((res) => {
                console.log(res)
                setUser(res)
            })} else {
                idq=5;
            }
       

        defaultFetch(`http://localhost:3001/get_current_user`, "post",
            { token: session })
            .then((res) => {
                console.log(res)
                setCurrentUser(res)
            })

        defaultFetch(`http://localhost:3001/get_users`, "post",
        {token: session })
            .then((res) => {
                console.log(res)
                setUserList(res)
            })

            defaultFetch(`http://localhost:3001/msg/read_channels`, "post",
            {token: session })
                .then((res) => {
                    console.log(res)
                    setChannelsAct(res)
                })

                defaultFetch(`http://localhost:3001/msg/read_inactive_channels`, "post",
                {token: session })
                    .then((res) => {
                        console.log(res)
                        console.log("channels")
                        setChannelsArc(res)
                    })

    }, [refresh])


    return (
        <CreateProfileContext.Provider value={{ showCard, setShowCard, 
        user, setUser, channelId, setChannelId, currentUser, usersList,
        refresh, setRefresh, channelsAct, channelsArc }}>
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
              {(showCard === "inbox" && user) &&
                <div>
                    <ProfileNavBar2 />
                    <ProfileNavBar />
                    <Inbox />
                </div>
            }
        </CreateProfileContext.Provider>

    )
}
