import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { CreateWelcomeContext } from './providers/createWelcomeContex';
import { Login } from './welcome/login';
import { NavBarCover } from './welcome/navBarCover';
import { NavBarLanguages } from './welcome/navBarLanguages';
import { NavBarMenu } from './welcome/navBarMenu';
import { SignIn } from './welcome/signin';
import { ForgotPass } from './welcome/forgotPass';
import { CategoryFinder } from './home/categoryFinder';
import { SlideEmotional } from './home/slideEmotional';
import { CatMenu } from './welcome/catMenu'
import { SlideLegal } from './home/slideLegal';
import { PopRegister } from './welcome/popRegister';
import { NavBotoom } from './home/navBottom';
import { defaultFetch } from '../helpers/defaultHelpers';


export const Welcome = () => {
    const [message, setMessage] = useState("");
    const [showAlert, setShowAlert] = useState("");
    const [display, setDisplay] = useState("main");
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(()=> {
        var session = cookies.get("session");
        if(!session) { navigate('/')};

       defaultFetch(`http://localhost:3001/get_current_user`, "post",
       { token: session })
       .then((res) => {
            if (res.mensaje==="token error") { navigate('/')} else {
                navigate('/profile')
            }
       })


    },[])

    return (

        <CreateWelcomeContext.Provider value={{ display, setDisplay, message, setMessage, showAlert, setShowAlert }}>
            <div>

                {display === "main" &&
                    <div>
                        <NavBarCover setDisplay={setDisplay}/>
                        <CategoryFinder/>
                        <SlideEmotional />
                        <SlideLegal />
                        <SignIn />
                        <NavBotoom/>
                    </div>
                }
                {display === "menu" &&
                    <div>
                        <NavBarMenu setDisplay={setDisplay}/>
                    </div>
                }
                {display === "languages" &&
                    <NavBarLanguages setDisplay={setDisplay}/>
                }
                { display === "catMenu" &&
                    <CatMenu setDisplay={setDisplay}/>
                }
                {display === "login" &&
                    <Login setDisplay={setDisplay}/>
                }
                {display === "sign-in" &&
                    <SignIn setDisplay={setDisplay}/>
                }
                {
                display === "pop" &&
                    <PopRegister setDisplay={setDisplay}/>
                }
                {display === "forgot" && 
                    <ForgotPass setDisplay={setDisplay}/>
                }
            </div>
        </CreateWelcomeContext.Provider>

    )
}
