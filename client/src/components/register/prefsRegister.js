import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate, Link, redirect } from 'react-router-dom'
import { defaultFetch } from '../helpers/defaultFetch';
import { GrClose } from 'react-icons/gr'
import { Alert } from '../modals/alert';
import { Timeline } from './timeline';
import { CreateRegisterContext } from '../providers/createRegisterContext';
import { ReactComponent as Close } from '../../media/cerrar.svg';
import { ReactComponent as Logo } from '../../media/logo.svg';

export const PrefsRegister = () => {
    const { setDisplay, message, setMessage, showAlert, setShowAlert, userData, setUserData } = useContext(CreateRegisterContext);
    const [email, setEmail] = useState();
    const { token } = useParams();
    const [emotional, setEmotional] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [legal, setLegal] = useState(false);
    const [labor, setLabor] = useState(false);
    const [disable, setDisable] = useState(true)
    const navigate = useNavigate()
    const close = () => {navigate('/')}
    
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
    const updateUser = async e => {
        e.preventDefault();
        let data = [];
        if (emotional) { data.push("Emocional") }
        if (admin) { data.push("Administrativo") }
        if (legal) { data.push("Orientación laboral") }
        if (labor) { data.push("Otro") }
        var newUser = {
            jwt: token,
            // user_name: e.target.name_.value,
            email: email,
            // password_: e.target.pass.value,
            // user_surname: e.target.surname_.value, 
            // about_me: "", 
            // year_birth: e.target.birth.value, 
            // gender: gender, 
            // // country: "", 
            // mother_tongue: language, 
            // // years_in: "", 
            // working: working, 
            // studies: "", 
            support_type: data.toString(),
            // expert: false, 
            // area: region, 
            // pic: defaultUser
        }
        const res = await defaultFetch("http://localhost:3001/registerPrefs", "POST", newUser)
        if (res.mensaje) {
            setMessage("Registro correcto! Haz login en tu cuenta")
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false);
                setDisplay("login")
            }, 2000)

        } else {
            setMessage("Ha habido un error, inténtelo de nuevo")
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false);
            }, 2000)
        }
    }
    const handleCheck = () => {
        setDisable(!disable)
    }
    return (

        <div className='register-container'>
            <div className="register-nav">
                <Logo />
                <div className='GrCloseBig'onClick={close}><Close /></div>
            </div>
            <div className="register-header">
                <div className='regTitle'><h1>Sé parte de la comunidad</h1></div>
            </div>
            <div><Timeline /></div>
            <div className='formContainerP'>
                <input className={!emotional ? "prefsButton" : "clicked"}
                    type="button"
                    value="Apoyo emocional"
                    onClick={() => setEmotional(!emotional)}
                />
                <input className={!admin ? "prefsButton" : "clicked"}
                    type="button"
                    value="Orientación sobre trámites"
                    onClick={() => setAdmin(!admin)}
                />
                <input className={!labor ? "prefsButton" : "clicked"}
                    type="button"
                    value="Orientación laboral"
                    onClick={() => setLabor(!labor)}
                />
                <input className={!legal ? "prefsButton" : "clicked"}
                    type="button"
                    value="Orientación sobre temas legales"
                    onClick={() => setLegal(!legal)}
                />
                <div className='checkBlockPrefs'>
                            <input
                                type="checkbox"
                                name="conditions"
                                required
                                className="check"
                                onChange={handleCheck}
                            />
                            <label className='scdLabel'><a href='#'>Acepto condiciones de datos</a></label>
                </div>
                <div className='inputRegister'>
                    <input className='pcontButton' type="button" onClick={updateUser} disabled={disable} value="Finalizar" />
                </div>
                <div className='messageRegisterR'>
                    {showAlert && <Alert message={message} />}
                </div>
            </div>
        </div>
    )
}
