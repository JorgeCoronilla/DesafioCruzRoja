import React, { useState } from 'react'
import { CreateWelcomeContext } from './providers/createWelcomeContex'
import { Cover } from './welcome/cover';
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
                        <CategoryFinder/>
                        <SlideEmotional />
                        <SlideLegal />
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
                { display === "catMenu" &&
                    <CatMenu />
                }
                {display === "login" &&
                    <Login />
                }
                {display === "sign-in" &&
                    <SignIn />
                }
                {
                display === "pop" &&
                    <PopRegister />
                }
                {display === "forgot" && 
                    <ForgotPass/>
                }
            </div>
        </CreateWelcomeContext.Provider>

    )
}
