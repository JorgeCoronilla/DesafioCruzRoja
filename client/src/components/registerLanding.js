import React, { useState } from 'react'
import { CreateRegisterContext } from './providers/createRegisterContext'
// import { Cover } from './welcome/cover';
// import { Login } from './welcome/login';
import { NavBarCover } from './welcome/navBarCover';
import { NavBarLanguages } from './welcome/navBarLanguages';
import { NavBarMenu } from './welcome/navBarMenu';
import { SignIn } from './welcome/signin';
// import { ForgotPass } from './welcome/forgotPass';
import { CategoryFinder } from './home/categoryFinder';
import { SlideEmotional } from './home/slideEmotional';
// import { CatMenu } from './welcome/catMenu'
import { SlideLegal } from './home/slideLegal';
// import { PopRegister } from './welcome/popRegister';
import { Register } from './register/register'
import { ProfileRegister } from './register/profileRegister'
import { PrefsRegister } from './register/prefsRegister'
import { Login } from './welcome/login';


export const RegisterLanding = () => {
    const [message, setMessage] = useState("");
    const [showAlert, setShowAlert] = useState("");
    const [display, setDisplay] = useState("register");
    const [userData, setUserData] = useState("")
    return (

        <CreateRegisterContext.Provider value={{ display, setDisplay, message, setMessage, showAlert, setShowAlert, userData, setUserData }}>
            <div>
                {display === "main" &&
                    <div>
                        <NavBarCover />
                        <CategoryFinder />
                        <SlideEmotional />
                        <SlideLegal />
                        <SignIn />
                    </div>
                }
                {display === "register" &&
                    <div>
                        <Register />
                    </div>
                }
                {display === "profile" &&
                    <div>
                        <ProfileRegister />
                    </div>
                }
                {display === "prefs" &&
                    <div>
                        <PrefsRegister />
                    </div>
                }
                {display === "login" &&
                    <div>
                        <Login />
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
            </div>
        </CreateRegisterContext.Provider>

    )
}
