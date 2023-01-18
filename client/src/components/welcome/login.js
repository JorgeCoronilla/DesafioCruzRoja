import React, {useContext}  from 'react'
import { defaultFetch } from '../../helpers/defaultHelpers';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { CreateWelcomeContext } from '../providers/createWelcomeContex';
import { Alert } from '../modals/alert';
import logo from '../../media/cruz_roja_svg.svg'
import logoText from '../../media/Frame.png'
import cerrar from '../../media/cerrar.svg'
export const Login = ({setDisplay}) => {

    const {  message, setMessage, showAlert, setShowAlert } = useContext(CreateWelcomeContext);
    const cookies = new Cookies();
    const navigate = useNavigate();
    const recoverPass = () => {setDisplay("forgot");}
    const signin = () => {setDisplay("sign-in");}
    const close = () => {setDisplay("main");}
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
                navigate("/profile");
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
    <div className='login-block'>
         {showAlert &&
        <Alert message={message}/>
        }
         <div className='loginContainer'>
            <img className='cerrar' src={cerrar} alt="close" onClick={close}/>
         <img className='cross' src={logo} alt="redcross logo" />
         <img className='crossText' src={logoText} alt="redcross logo" />
                    <form onSubmit={sendLogin}>
                        <div>
            
                            <h2>Iniciar sesión</h2>
                            <h3 onClick={signin}>¿Aún no eres miembro? Inscríbete aquí</h3>
                            </div>
                        <div>
                            <p>*Correo electrónico</p>
                            <input className='loginInput' type="email" name='email' placeholder='Correo electrónico' required minLength="5" maxLength="40"></input>
                        </div>
                        <p>*Contraseña</p>
                        <div> 
                        <input className='loginInput2' type="password" name='pass' required placeholder='Contraseña'minLength="4" maxLength="12"></input></div>
                        <input type="checkbox" /><label>Recordarme</label>
                        <h4 onClick={recoverPass}>¿Has olvidado la contraseña?</h4>
           
                        <div><button type="submit">Continuar</button></div>
                    </form>

                        </div>
    </div>
  )
  }