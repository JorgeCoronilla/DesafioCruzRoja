import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { defaultFetch } from '../../helpers/defaultHelpers';
import { Alert } from '../modals/alert';
import { CreateWelcomeContext } from '../providers/createWelcomeContex';


export const ChangePass = ({setDisplay}) => {

    const { message, setMessage, showAlert, setShowAlert
    } = useContext(CreateWelcomeContext);

    const { token } = useParams();
    const navigate = useNavigate();
    const newPass = async e => {
        e.preventDefault();
        if (e.target.pass.value === e.target.confirmPass.value) {

            var newUser = {
                token: token,
                password_: e.target.pass.value
            }
            const res = await defaultFetch("http://cuevos3.westeurope.cloudapp.azure.com:3001/change-pass", "post", newUser)
            if (res.mensaje) {
                setMessage("Contraseña actualizada correctamente")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                    navigate("/")
                }, 3000)

            } else {
                setMessage("Ha ocurrido un problema, pruebe de nuevo")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000)
            }

        } else {
            setMessage("Las contraseñas no coinciden")
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false);
            }, 3000)
        }
    }


    return (
        <div><div>
            {showAlert &&
                <Alert message={message} />
            }
            <div className='register-container'><div>
                <h5>Su email ha sido verificado.</h5>
                <h6>¡Gracias!</h6>
                <div className='recoverPass'>
                    <form onSubmit={newPass}>

                        <h4>Nueva contraseña</h4>
                        <input type="password" name='pass' required minLength="4" maxLength="12"></input>

                        <h4>Confirma contraseña</h4>
                        <input type="password" name='confirmPass' required minLength="4" maxLength="12"></input>

                        <button type="submit">Guardar</button>
                    </form>
                </div>
            </div>
            </div>
        </div></div>
    )
}
