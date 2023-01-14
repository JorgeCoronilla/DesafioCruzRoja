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
                <div>  <img className='profilePic' src={user.pic} alt="user 1" /></div>
                <div><p>22 reseñas</p>
                    <p>Verificado</p>
                </div>
                <div>
                    <button>Añadir a favoritos</button>
                    <button>Escribir reseña</button>
                </div>
                <div className='inBox'>
                    <div className='myMessage'></div>
                    <div className='inComing'></div>
                </div>
                {messages &&
                    <div className='oldMessages'>
                        {messages.map((message, index) => {
                            return (
                                <div key={index}>

                                    {message.fk_user_id_sender===user.user_id &&
                                    <div>
                                         <p>Profile user</p>
                                    <p>{message.message}</p>
                                    <p>{message.fk_user_id_sender}</p>
                                    </div>
                                   
                                    }
                                    <div>
                                    {message.fk_user_id_sender===currentUser.user_id &&
                                    <div>
                                        <p>Current user</p>
                                    <p>{message.message}</p>
                                    <p>{message.fk_user_id_sender}</p>
                                    </div>
                                   
                                    }
                                    </div>
                                </div>)
                        }
                        )}
                    </div>
                }
                <div className='newMessage'>
                    <form onSubmit={sendMessage}>
                        <input name='message' />
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
