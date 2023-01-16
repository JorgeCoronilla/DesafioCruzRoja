import React, {useContext} from 'react'
import { CreateProfileContext } from '../providers/createProfileContext';

export const NavBarMenuLogged = ({setDisplay}) => {
    const { currentUser } = useContext(CreateProfileContext);
  
  
    const loginLink = () => { setDisplay("login") }
    const signinLink = () => { setDisplay("sign-in") }
    const close = () => {setDisplay("main")}

    return (
        <div>
            <div className='navBarMenu'>
                <div><h6>Inmi</h6></div>
                <div><p onClick={close}>&#10005;</p></div>
            </div>
            <div className='userCardNav'>
                <div><img className='textPic' src={currentUser.pic} alt="user 1" />
                </div>
                <div>
                    <h6>{currentUser.user_name}</h6>
                    <p>{currentUser.email}</p>
                </div>
            </div>
            
            <div>
                <div className='menuOptions2'>
                <hr/>
                    <p>Quiero ayudar</p>
                    <p>Mi perfil</p>
                    <p>Ajustes</p>
                    <p>FAQS</p>
                </div>
            </div>
        </div>
    )
}