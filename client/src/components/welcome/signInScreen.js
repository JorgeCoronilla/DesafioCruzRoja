import React, { useContext } from 'react'
import { defaultFetch } from '../helpers/defaultFetch';
import { useNavigate } from 'react-router-dom'
import { Alert } from '../modals/alert';
import { CreateWelcomeContext } from '../providers/createWelcomeContex';
import cerrar from '../../media/cerrar.svg'
import logo from '../../media/logo-mail.png'
import logoText from '../../media/Frame.png'

export const SignInScreen = ({ setDisplay }) => {
    const { message, setMessage, showAlert, setShowAlert } = useContext(CreateWelcomeContext)
    const navigate = useNavigate();
    const close = () => { setDisplay("main"); }

    const sigInSub = async e => {
        e.preventDefault();
        var userEmail = { email: e.target.email.value };

        //Envía correo de confirmación
        const res = await defaultFetch("http://cuevos3.westeurope.cloudapp.azure.com:3001/sign-in", "POST", userEmail);

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
            <div className='sigContainer'>
                <img className='cerrar' src={cerrar} alt="close" onClick={close} />
                <img className='cross' src={logo} alt="redcross logo" />
                <form onSubmit={sigInSub}>
                    <h4 className='sigText'>Para configurar tu cuenta y empezar a conectar con nuestros usuarios, te enviaremos un email para confirmar que tu dirección de correo electrónico es correcta.</h4>
                    <label>*Dirección de correo electrónico</label>
                    <input type="email" required name="email" minLength="5" maxLength="40" />
                    <div>
                        <button type="submit" value="Registrarse" className='sigBtn'>Hazte miembro</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
