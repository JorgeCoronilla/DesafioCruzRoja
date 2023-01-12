import React, {useContext } from 'react'
import { defaultFetch } from '../helpers/defaultFetch';
import { useNavigate } from 'react-router-dom'
import { Alert } from '../modals/alert';
import { CreateWelcomeContext } from '../providers/createWelcomeContex';

export const SignIn = () => {
    const { message, setMessage, showAlert, setShowAlert } = useContext(CreateWelcomeContext)
    const navigate = useNavigate();
    


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
    <div>    
            {showAlert &&
                    <Alert message={message} />
                }
            <div className="register-header">
                <div className="register-block">
                    <h2>Confirmación de correo</h2>
                    <h4>Regístrate para obtener tu cuenta</h4>

                </div>
            </div>
            <div className='formContainer'>
                <form onSubmit={sigInSub}>
                    <div>
                        <label>Email</label>
                        <input type="email" required name="email" minLength="5" maxLength="40" />
                    </div>
                
                    <button type="submit" value="Registrarse" >Hazte miembro</button>
                </form>
            </div>
        </div>
  )
}
