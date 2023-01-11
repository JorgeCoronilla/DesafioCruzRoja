import React, { useState } from 'react'
import { CreateWelcomeContext } from './providers/createWelcomeContex'
import { Cover } from './welcome/cover';
import { Login } from './welcome/login';
import { NavBarCover } from './welcome/navBarCover';
import { NavBarLanguages } from './welcome/navBarLanguages';
import { NavBarMenu } from './welcome/navBarMenu';
import { SignIn } from './welcome/Signin';
import { ForgotPass } from './welcome/forgotPass';


export const Welcome = () => {
    const [message, setMessage] = useState("");
    const [showAlert, setShowAlert] = useState("");
    const [display, setDisplay] = useState("main");

    return (

        <CreateWelcomeContext.Provider value={{ display, setDisplay, message, setMessage, showAlert, setShowAlert }}>
            <div>

                {display === "main" &&
                    <div>
                        <NavBarCover />
                        <Cover />
                        <SignIn />
                    </div>
                }
                {display === "menu" &&
                    <div>
                        <NavBarMenu />
                    </div>
                }
                {display === "languages" &&
                    <NavBarLanguages />
                }

                {display === "login" &&
                    <Login />
                }
                {display === "sign-in" &&
                    <SignIn />
                }

                {display === "forgot" && 
                    <ForgotPass/>
                }
            </div>
        </CreateWelcomeContext.Provider>

    )
}
