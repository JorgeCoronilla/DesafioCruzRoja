import React, { useContext, useEffect, useState } from 'react'
import { defaultFetch } from '../../helpers/defaultHelpers';
import { CreateProfileContext } from '../providers/createProfileContext';
import { ReactComponent as Arrow } from '../../media/derechasend.svg';

import Cookies from 'universal-cookie';
export const Firstcontact = () => {
    const cookies = new Cookies();
    var session = cookies.get("session");
    const { user, currentUser } = useContext(CreateProfileContext);
    const [messages, setMessages] = useState();
    const [refresh, setRefresh] = useState(false);
    const profileId = parseInt(localStorage.getItem('recipientId'))
    const channelId = parseInt(localStorage.getItem('currentChannelId'))
    const currentProfileId = parseInt(localStorage.getItem('currentProfileId'))
    useEffect(() => {
        console.log(user)
        defaultFetch(`http://cuevos3.westeurope.cloudapp.azure.com:3001/msg/read_messages`, "post",
            { token: session, channelId: channelId })
            .then((res) => {
                if (res.length > 0) {
                    setMessages(res)
                    console.log(res)
                    // if (res.fk_user_id_sender === currentProfileId ) {
                    //     localStorage.setItem('recipientId', res.fk_user_id_recipient)
                    // } else {
                    //     localStorage.setItem('recipientId', (res.fk_user_id_sender.toString()))
                    // }
                }
            })
    }, [refresh])

    const sendMessage = (e) => {
        e.preventDefault();
        defaultFetch(`http://cuevos3.westeurope.cloudapp.azure.com:3001/msg/create_message`, "post",
            { token: session, fk_channel_id: channelId, recipient: profileId, message: e.target.message.value })
            .then((res) => {
                if (res.length > 0) { setMessages(res) }
            })
        e.target.message.value = "";
        setRefresh(!refresh)
    }

    return (
        <div>
            <div className='messagesBox'>
                <div className='msgProfile'>
                    <img className='messagePic' src={user.pic} alt="user 1" />
                    <div>
                        <p>* 22 reseñas</p>
                    </div>

                </div>
                <div className='msgProfile   '>
                    <button className='msgBtn1'>Añadir a favoritos</button>
                    <button className='msgBtn2'>Escribir reseña</button>
                </div>

                <div className='messagesChain'>
                    {messages &&
                        <div className='oldMessages'>
                            {messages.map((message, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            {message.fk_user_id_sender === currentUser.user_id ?
                                                <div className='msgContainer'>
                                                    <p className='msgTime'>Ahora</p>
                                                    <div className='textPicBox'>
                                                        <img className='textPic' src={currentUser.pic} alt="user 1" />
                                                        <p className='sentMsg'>{message.message}</p>
                                                    </div>
                                                </div>
                                            :
                                            <div className='msgContainer'>
                                                <p className='msgTime'>Ahora</p>
                                                <p>user {profileId}</p>
                                                <div className='textPicBox'>
                                                    <p className='recMsg'>{message.message}</p>
                                                    <img className='textPic' src={user.pic} alt="user 1" />
                                                </div>
                                            </div>

                                            }
                                        </div>

                                        {message.fk_user_id_sender === profileId &&
                                            <div className='msgContainer'>
                                                <p className='msgTime'>Ahora</p>
                                                <p>user {profileId}</p>
                                                <div className='textPicBox'>
                                                    <p className='recMsg'>{message.message}</p>
                                                    <img className='textPic' src={user.pic} alt="user 1" />
                                                </div>
                                            </div>

                                        }

                                    </div>)
                            }
                            )}
                        </div>
                    }
                </div>
            </div>
            <div className='newMessage'>
                <form onSubmit={sendMessage}>
                    <input name='message' />
                    <button type='submit'><Arrow /></button>
                </form>
            </div>
        </div>
    )
}
