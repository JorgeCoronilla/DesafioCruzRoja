import React, { useState, useContext } from 'react'
import { ProfileNavBar } from './profileNavBar'
import { ProfileNavBar2 } from './ProfileNavBar2'
import { CreateProfileContext } from '../providers/createProfileContext';
import Cookies from 'universal-cookie';

export const Inbox = () => {
    const cookies = new Cookies();
    var session = cookies.get("session");
    const { channelsAct, channelsArc, user, currentUser } = useContext(CreateProfileContext);
    const [showTab, setShowTab] = useState("msg");
    const actList = () => {
        setShowTab("msg")
    }

    const arcList = () => {
        setShowTab("arch")
    }
    return (
        <div>

            <div>
                <div className='inboxBtnContainer'>
                    <button className='inboxBtn1' onClick={actList}>Mensajes</button>
                    <button className='inboxBtn2' onClick={arcList}>Mensajes</button>
                </div>
                {showTab === "msg" &&
                    <div>
                        {channelsAct.map((channel, index) => {
                            return (
                                <div>
                                    {channel.user_id_sender === currentUser.user_id ?
                                        <div>
                                            <img className='textPic' src={channel.pic_sender} alt="user 1" />
                                            <h3 key={index}>{channel.user_name_recipient}</h3>
                                            <p>Lorem ipsum lorem ipsum lorem ipsum</p>
                                        </div>
                                        :
                                        <div>
                                            <img className='textPic' src={channel.pic_recipient} alt="user 1" />
                                            <h3 key={index}>{channel.user_name_sender}</h3>
                                            <p>Lorem ipsum lorem ipsum lorem ipsum</p>
                                        </div>
                                    }

                                </div>

                            )
                        })}
                    </div>
                }

                {showTab === "arch" &&
                    <div>Archivados</div>
                }
            </div>
        </div>
    )
}
