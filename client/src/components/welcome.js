import React, { useState } from 'react'
import { CreateWelcomeContext } from './providers/createWelcomeContex'
import { Cover } from './welcome/cover';
import { ForgotPass } from './welcome/forgotPass';
import { Login } from './welcome/login';


export const Welcome = () => {

    const [display, setDisplay] = useState("main");

    return (

        <CreateWelcomeContext.Provider value={{ display, setDisplay }}>
            <div>
                {display === "main" &&
                    <Cover />
                }
                {display === "login" &&
                    <Login />
                }
                {display === "signin" &&
                    <Cover />
                }
                {display === "forgot" &&
                    <ForgotPass />
                }

            </div>
        </CreateWelcomeContext.Provider>

    )
}
