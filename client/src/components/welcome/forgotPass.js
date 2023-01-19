import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { defaultFetch } from '../../helpers/defaultHelpers';
import { Alert } from '../modals/alert';
import { CreateWelcomeContext } from '../providers/createWelcomeContex';
import logo from '../../media/cruz_roja_svg.svg'
import logoText from '../../media/Frame.png'
import cerrar from '../../media/cerrar.svg'

export const ForgotPass = ({setDisplay}) => {

    const { message, setMessage, showAlert, setShowAlert
    } = useContext(CreateWelcomeContext);
    const close = () => {setDisplay("main");}
    const navigate = useNavigate();
    const recover = async e => {
        e.preventDefault();
        var userEmail = { email: e.target.email.value };
        const res = await defaultFetch("http://cuevos3.westeurope.cloudapp.azure.com:3001/recover-pass", "POST", userEmail);
        if (res.mensaje) {
          setMessage("Correo enviado correctamente " + e.target.email.value)
          setShowAlert(true)
          setTimeout(() => {
            setShowAlert(false);
            navigate("/");
          }, 3000)
        }
      }
    

    return (
        <div>

      {showAlert && <Alert message={message} />}

      <div className='loginContainer'>
      <img className='cerrar' src={cerrar} alt="close" onClick={close}/>
         <img className='cross' src={logo} alt="redcross logo" />
         <img className='crossText' src={logoText} alt="redcross logo" />
        <form onSubmit={recover}>
          <h2>¿Ha olvidado su contraseña?</h2>
          <h5>Introduzca a continuación su dirección de correo electrónico y le enviaremos por correo las instrucciones para restablecerla.</h5>
          <input  className='loginInput' type="email" required name="email" minLength="4" maxLength="40" ></input>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
    )
}
