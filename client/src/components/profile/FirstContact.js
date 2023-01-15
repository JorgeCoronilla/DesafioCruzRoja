import React, { useContext, useEffect, useState } from 'react'
import { defaultFetch } from '../../helpers/defaultHelpers';
import { CreateProfileContext } from '../providers/createProfileContext';
import Cookies from 'universal-cookie';
export const Firstcontact = () => {
    const cookies = new Cookies();
    var session = cookies.get("session");
    const { showCard, setShowCard, user, setChannelId, currentUser } = useContext(CreateProfileContext);
    const [messages, setMessages] = useState();
    const [refresh, setRefresh] = useState(false);
    const profileId = parseInt(localStorage.getItem('currentProfileId'))
    const channelId = parseInt(localStorage.getItem('currentChannelId'))
    useEffect(() => {
        console.log(user)
        defaultFetch(`http://localhost:3001/msg/read_messages`, "post",
            { token: session, channelId: channelId })
            .then((res) => {
                if (res.length > 0) {
                    setMessages(res)
                    console.log(res)
                }
            })
    }, [refresh])

    const sendMessage = (e) => {
        e.preventDefault();
        defaultFetch(`http://localhost:3001/msg/create_message`, "post",
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

                                    {message.fk_user_id_sender === user.user_id &&
                                        <div className='msgContainer'>
                                            <p className='msgTime'>Hace 3 días</p>
                                            <div className='textPicBox'>
                                            <p className='recMsg'>{message.message}</p>
                                            <img className='textPic' src={user.pic} alt="user 1" />
                                            </div>
                                        </div>

                                    }
                                    <div>
                                        {message.fk_user_id_sender === currentUser.user_id &&
                                            <div className='msgContainer'>
                                                <p className='msgTime'>Hace 2 días</p>
                                                <div className='textPicBox'>
                                                <img className='textPic' src={currentUser.pic} alt="user 1" />
                                                <p className='sentMsg'>{message.message}</p>
                                                </div>
                                            </div>

                                        }
                                    </div>
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
                        <button type='submit'>-></button>
                    </form>
                </div>
        </div>
    )
}
