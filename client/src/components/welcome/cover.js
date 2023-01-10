import React, {useContext} from 'react'
import { CreateWelcomeContext } from '../providers/createWelcomeContex'

export const Cover = () => {
    
    const { setDisplay } = useContext(CreateWelcomeContext);
    const loginLink = () => { setDisplay("login") }
    const signinLink = () => { setDisplay("signin") }
   
 
  return (
    <div>
         
            <div>
                <button onClick={loginLink}>Log in</button>
                <button onClick={signinLink}>Sign in</button>
            </div>
    </div>
  )
}
