import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { defaultFetch } from '../helpers/defaultFetch';
import { Alert } from '../modals/alert';

export const Register = () => {
    const [message, setMessage] = useState();
    const [showAlert, setShowAlert] = useState();

    const [email, setEmail] = useState();
    const navigate = useNavigate();
    const { token } = useParams();
    const [message, setMessage] = useState();
    const [showAlert, setShowAlert] = useState()

    //Comprueba si el toke de la url es válido
    useEffect(() => {
        defaultFetch("http://localhost:3001/check-email", "POST", { token: token })
            .then((res) => {
                if (res.mensaje) {
                    setEmail(res.email);
                    console.log(res);
                } else {
                    setMessage("El enlace es incorrecto o ha expirado")
                    setShowAlert(true)
                    setTimeout(() => {
                        setShowAlert(false);
                    }, 3000)
                }
            })

    }, [])

    //Inserta el nuevo usuario
    const insertUser = async e => {
        e.preventDefault();
        console.log(e.target.confirmPass.value);
        if (e.target.pass.value === e.target.confirmPass.value) {
            console.log(email);
            var newUser = {
                jwt: token,
                user_name : e.target.name_.value,
                // surname : "",
                // about_me : "",
                // langauges: "",
                email : email,
                // phone : "",
                // studies : "",
                // country : "",
                // age : "",
                // emotional_support : 0,
                // legal_support : 0,
                // collab_individual : false,
                // collab_institution : false,
                // job : false,
                password_ : e.target.pass.value,
                // banned_users : {},
                // favs : {}
            }
            const res = await defaultFetch("http://localhost:3001/register", "POST", newUser)
            if (res.mensaje) {
                setMessage("Registro correcto, gracias")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                    navigate("/")
                }, 3000)

            } else {
                setMessage("Ha habido un error, inténtelo de nuevo")
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

        <div>
            {showAlert && <Alert message={message} />}
            <div className="register-header">
                <div className="register-block">
                    <img className="logo-center" src="https://www2.cruzroja.es/o/cruzroja-web-theme/images/CR-ES-Horizontal-RGB-recortada.png" width="250" alt="" />
                    <h2>Registro</h2>
                    <h3>Email verificado!!</h3>

                </div>
            </div>
            <div className='formContainer'>
                <form onSubmit={insertUser}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" name='name_' required minLength="5" maxLength="40" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="pass" minLength="4" maxLength="12" required />
                    </div>
                    <div>
                        <label>Confirmar password</label>
                        <input type="password" name="confirmPass" minLength="4" maxLength="12" required />
                    </div>
                    <input type="submit" value="Confirmar registro" />
                </form>
            </div>
        </div>
    )
}
