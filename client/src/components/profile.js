import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { NavBarCover } from './welcome/navBarCover';
import { CategoryFinder } from './home/categoryFinder';
import { SlideEmotional } from './home/slideEmotional';
import { SlideLegal } from './home/slideLegal';
import { NavBarLogged } from './profile/navBarLogged';
import { NavBarMenu } from './welcome/navBarMenu';
import { NavBarLanguages } from './welcome/navBarLanguages';
import { Search } from './home/search';
import { NavBarMenuLogged } from './home/navBarMenuLogged';
import { ReviewList } from './profile/reviewList';
import { NavBottom } from './home/navBottom';

export const Profile = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [display, setDisplay] = useState("main");
    const [pop, setPop] = useState(false);
    const [user, setUser] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [channelId, setChannelId] = useState();
    const [usersList, setUserList] = useState();
    const [refresh, setRefresh] = useState(false);
    const [channelsAct, setChannelsAct] = useState();
    const [channelsArc, setChannelsArc] = useState();
    var idq;

    useEffect(() => {

        var session = cookies.get("session");
        if (!session) { navigate('/') };

        defaultFetch(`http://cuevos3.westeurope.cloudapp.azure.com:3001/get_current_user`, "post",
            { token: session })
            .then((res) => {
                if (res.mensaje === "token error") { navigate('/') } else {
                    console.log(res)
                    setCurrentUser(res)

                    console.log(res.user_id)
                    localStorage.setItem('currentProfileId', JSON.stringify(res.user_id))
                    idq = res.user_id
                }
            })


        idq = parseInt(localStorage.getItem('currentProfileId'))
        //idq = currentUser.user_id
        console.log(idq)
        if (idq) {
            let user = { id: idq, token: session }
            console.log(session)
            defaultFetch(`http://cuevos3.westeurope.cloudapp.azure.com:3001/get_user`, "post",
                user)
                .then((res) => {
                    console.log(res)
                    setUser(res)
                })
        } else {
            idq = 5;
        }

        defaultFetch(`http://cuevos3.westeurope.cloudapp.azure.com:3001/get_users`, "post",
            { token: session })
            .then((res) => {
                console.log(res)
                setUserList(res)
            })

        defaultFetch(`http://cuevos3.westeurope.cloudapp.azure.com:3001/msg/read_channels`, "post",
            { token: session })
            .then((res) => {
                console.log(res)
                setChannelsAct(res)
            })

        defaultFetch(`http://cuevos3.westeurope.cloudapp.azure.com:3001/msg/read_inactive_channels`, "post",
            { token: session })
            .then((res) => {
                console.log(res)
                console.log("channels")
                setChannelsArc(res)
            })

    }, [refresh])


    return (
        <CreateProfileContext.Provider value={{
            display, setDisplay,
            user, setUser, channelId, setChannelId, currentUser, usersList,
            refresh, setRefresh, channelsAct, channelsArc
        }}>
            {(display === "main" && user) &&
                <div>
                    <NavBarLogged setDisplay={setDisplay} />
                    <CategoryFinder setPop={setPop} pop={pop} />
                    {pop &&
                        <Search setDisplay={setDisplay}/>
                    }
                    <NavBottom setDisplay={setDisplay} display ={display}/>
                    <SlideEmotional />
                    <SlideLegal />
                </div>
            }

            {display === "menu" &&
                <div>
                    <NavBarMenuLogged setDisplay={setDisplay} />
                </div>
            }

            {display === "languages" &&
                <NavBarLanguages setDisplay={setDisplay} />
            }

            {(display === "firstView" && user) &&
                <div>
                    <ProfileNavBar2 setDisplay={setDisplay}/>
                    <ProfileCard />
                    <ReviewList />
                    <NavBottom setDisplay={setDisplay} display ={display}/>
                </div>
            }
            {(display === "firstContact" && user) &&
                <div>
                    <ProfileNavBar2 />
                    <ProfileNavBar3 />
                    <Firstcontact />
                </div>
            }
            {(display === "list" && user) &&
                <div>
                    <ProfileNavBar setDisplay={setDisplay}/>
                    <CardOnList setDisplay={setDisplay}/>
                </div>
            }
            {(display === "inbox" && user) &&
                <div>
                    <ProfileNavBar2 />
                    <ProfileNavBar />
                    <Inbox />
                </div>
            }
        </CreateProfileContext.Provider>

    )
}
