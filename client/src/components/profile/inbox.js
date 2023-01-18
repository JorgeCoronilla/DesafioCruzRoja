import React, { useState, useContext } from 'react'
import { ProfileNavBar } from './profileNavBar'
import { ProfileNavBar2 } from './ProfileNavBar2'
import { CreateProfileContext } from '../providers/createProfileContext';
import Cookies from 'universal-cookie';

export const Inbox = ({setDisplay}) => {
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

    const goChannel = (e) =>{
        console.log(e.target.id);
        localStorage.setItem('currentChannelId',e.target.id);
        setDisplay('firstContact')
    }
    return (
        <div>

            <div>
                <div className='inboxBtnContainer'>
                    <button className='inboxBtn1' onClick={actList}>Mensajes</button>
                    <button className='inboxBtn2' onClick={arcList}>Archivados</button>
                </div>
                {showTab === "msg" &&
                    <div>
                        {channelsAct &&
                        <div>
                               {channelsAct.map((channel, index) => {
                            return (
                                <div id={channel.id} type="button" className='inboxContainer' key={index} onClick={goChannel}>
                                    {channel.user_id_sender === currentUser.user_id ?
                                        <div id={channel.id} className='inboxRow'>
                                            <img id={channel.id} className='textPic' src={channel.pic_sender} alt="user 1" />
                                            <div>
                                                <h3 id={channel.id}  key={index}>{channel.user_name_recipient}</h3>
                                                <p id={channel.id} >Hola! Qué tal estás?</p>
                                            </div>
                                        </div>
                                        :
                                        <div  id={channel.id} type="button" className='inboxRow' onClick={goChannel}>
                                            <img  id={channel.id} className='textPic' src={channel.pic_recipient} alt="user 1" />
                                            <div>
                                                <h3 id={channel.id}  key={index}>{channel.user_name_sender}</h3>
                                                <p  id={channel.id}>Buenas tardes, me encantaría contactar contigo para un te,a relacionado con....</p>
                                            </div>

                                        </div>
                                    }

                                </div>

                            )
                        })}
                        </div>
                        }
                     
                    </div>
                }

                {showTab === "arch" &&
                      <div>

                        {channelsArc &&
                        <div>
                              {channelsArc.map((channel, index) => {
                          return (
                              <div className='inboxContainer' key={index}>
                                  {channel.user_id_sender === currentUser.user_id ?
                                      <div className='inboxRow'>
                                          <img className='textPic' src={channel.pic_sender} alt="user 1" />
                                          <div>
                                              <h3 key={index}>{channel.user_name_recipient}</h3>
                                              <p>Lorem ipsum lorem ipsum lorem ipsum</p>
                                          </div>
                                      </div>
                                      :
                                      <div  className='inboxRow'>
                                          <img className='textPic' src={channel.pic_recipient} alt="user 1" />
                                          <div>
                                              <h3 key={index}>{channel.user_name_sender}</h3>
                                              <p>Lorem ipsum lorem ipsum lorem ipsum</p>
                                          </div>
                                      </div>
                                  }
                              </div>
                          )
                      })}   
                        </div>
                        }
                    
                  </div>
                }
            </div>
        </div>
    )
}
