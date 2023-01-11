import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { defaultFetch } from '../../helpers/defaultHelpers';
import { Alert } from '../modals/alert';
import { CreateWelcomeContext } from '../providers/createWelcomeContex';

export const ForgotPass = () => {

    const { message, setMessage, showAlert, setShowAlert
    } = useContext(CreateWelcomeContext);

    const navigate = useNavigate();
    const recover = async e => {
        e.preventDefault();
        var userEmail = { email: e.target.email.value };
        const res = await defaultFetch("http://localhost:3001/recover-pass", "POST", userEmail);
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

      <div className='register-container'>
        <form onSubmit={recover}>
          <h5>Ingresa el email que usaste para registrarte</h5>
          <h6>Te enviaremos un correo con las instrucciones para cambiar tu contraseña</h6>
          <input type="email" required name="email" minLength="4" maxLength="40" ></input>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
    )
}
