
import React, { useContext } from 'react'
import { defaultFetch } from '../helpers/defaultFetch';
import { useNavigate } from 'react-router-dom'
import { Alert } from '../modals/alert';
import { CreateWelcomeContext } from '../providers/createWelcomeContex';
import cerrar from '../../media/cerrar.svg'
import logo from '../../media/cruz_roja_svg.svg'
import logoText from '../../media/Frame.png'
import { RiHeart3Line } from 'react-icons/ri';
export const SignInMenu = ({ setDisplay }) => {
    const { message, setMessage, showAlert, setShowAlert } = useContext(CreateWelcomeContext)
    const navigate = useNavigate();
    const close = () => { setDisplay("main"); }

    const sigInSub = async e => {
        e.preventDefault();
        var userEmail = { email: e.target.email.value };

        //Envía correo de confirmación
        const res = await defaultFetch("http://localhost:3001/sign-in", "POST", userEmail);

        if (res) {
            setMessage("Correo enviado correctamente")
            setShowAlert(true)

            setTimeout(() => {
                setShowAlert(false);
                navigate("/")
            }, 3000)

        } else {
            setMessage("Perdona, algo ha salido mal, vuelve a intentarlo")
            setShowAlert(true)

            setTimeout(() => {
                setShowAlert(false);
            }, 3000)
        }

    }

    return (
        <div className='login-block'>
            {showAlert &&
                <Alert message={message} />
            }
            <div className='loginContainer'>
                <img className='cerrar' src={cerrar} alt="close" onClick={close} />
                <img className='cross' src={logo} alt="redcross logo" />
                <img className='crossText' src={logoText} alt="redcross logo" />
                <form onSubmit={sigInSub}>
                    <div>
                        <h3 className='sigText'>Para terminar de configurar tu cuenta y empezar a conectar con nuestros usuarios, confirma que tu correo electrónico es correcto.</h3>
                    </div>
                    <div>
                        <p>*Correo electrónico</p>
                        <input className ="loginInput" type="email" required name="email" minLength="5" maxLength="40"/>
                        <button type="submit" value="Registrarse" className='registerBtn'>Hazte miembro</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
