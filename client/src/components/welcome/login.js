import React, {useContext}  from 'react'
import { defaultFetch } from '../../helpers/defaultHelpers';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { CreateWelcomeContext } from '../providers/createWelcomeContex';
import { Alert } from '../modals/alert';

export const Login = () => {

    const { setDisplay, message, setMessage, showAlert, setShowAlert } = useContext(CreateWelcomeContext);
    const cookies = new Cookies();
    const navigate = useNavigate();
    const recoverPass = () => {setDisplay("forgot");}

    //Login
    const sendLogin = async e => {
        e.preventDefault();

        var user = {
            email: e.target.email.value,
            pass: e.target.pass.value
        };
        await defaultFetch("http://localhost:3001/login", "POST", user).then((res) => {
            if (res.validation) {
                localStorage.setItem("user", JSON.stringify(res.user));
                cookies.set('session', res.token, { path: '/' });
                navigate("/dash");
            }   else {
                setMessage("Contraseña o email incorrecto/s")
                setShowAlert(true)
    
                setTimeout(()=>{ 
                    setShowAlert(false);
                },3000)
            }
        });
    }

  return (
    <div>
         {showAlert &&
        <Alert message={message}/>
        }
         <div className='formContainer'>
                    <form onSubmit={sendLogin}>
                        <div>
                            <h5>Login</h5>
                            </div>
                        <div>
                            <input type="email" name='email' placeholder='Correo electrónico' required minLength="5" maxLength="40"></input>
                        </div>
                        <div> <input type="password" name='pass' required placeholder='Contraseña'minLength="4" maxLength="12"></input></div>
                        <div><button type="submit">Log in</button></div>
                    </form>
                    <p onClick={recoverPass}>¿Olvidaste tu contraseña? Recupérala aquí.</p>
                </div>
    </div>
  )
  }