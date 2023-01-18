import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { defaultFetch } from '../helpers/defaultFetch';
import { Alert } from '../modals/alert';
import { Timeline } from './timeline';
import { CreateRegisterContext } from '../providers/createRegisterContext';
import { ReactComponent as Close } from '../../media/cerrar.svg';
import { ReactComponent as Logo } from '../../media/logo.svg';
export const Register = () => {

    const { setDisplay, message, setMessage, showAlert, setShowAlert } = useContext(CreateRegisterContext);
    const [email, setEmail] = useState("gofthet@gmail.com");
    const { token } = useParams();
    // Comprueba si el token de la url es válido
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
        console.log(typeof (e.target.surname_.value));
        if (e.target.pass.value === e.target.confirmPass.value) {
            console.log(email);
            var newUser = {
                jwt: token,
                user_name: e.target.name_.value,
                email: email,
                password_: e.target.pass.value,
                user_surname: e.target.surname_.value,
                about_me: "",
                year_birth: "",
                gender: "",
                country: "",
                mother_tongue: "",
                years_in: "",
                working: "",
                studies: "",
                support_type: "",
                expert: false,
                area: "",
            
            }
            const res = await defaultFetch("http://localhost:3001/register", "POST", newUser)
            if (res.mensaje) {
                setMessage("A continuación rellenaremos tu perfil")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                    setDisplay("profile")
                }, 2000)

            } else {
                setMessage("Ha habido un error, inténtelo de nuevo")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000)
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

        <div className='register-container'>
            <div className="register-nav">
                <Logo />
                <div className='GrCloseBig'><Close /></div>
            </div>
            <div className="register-header">
                <div className='regTitle'><h1>Sé parte de la comunidad</h1></div>
            </div>
            <div><Timeline /></div>
            <div className='regContainer'>
                <form onSubmit={insertUser}>
                    <div className='inputContainer'>
                        <label><sup>*</sup>Nombre</label>
                        <input type="text" name='name_' required minLength="5" maxLength="50" />
                    </div>
                    <div className='inputContainer'>
                        <label>Apellido</label>
                        <input type="text" name='surname_' minLength="5" maxLength="50" />
                    </div>
                    <div className='inputContainer'>
                        <label><sup>*</sup>Contraseña</label>
                        <input type="password" name="pass" required minLength="4" maxLength="12" />
                    </div>
                    <div className='inputContainer'>
                        <label><sup>*</sup>Confirmar contraseña</label>
                        <input type="password" name="confirmPass" required minLength="4" maxLength="12" />
                    </div>

                    <div className='inputRegister'>
                        <input className='contButton' type="submit" value="Continuar" />
                    </div>
                    <div className='messageRegisterP'>
                        {showAlert && <Alert message={message} />}
                    </div>
                </form>
            </div>
        </div>
    )
}
