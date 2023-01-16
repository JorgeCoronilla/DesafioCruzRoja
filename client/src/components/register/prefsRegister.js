import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate, Link, redirect } from 'react-router-dom'
import { defaultFetch } from '../helpers/defaultFetch';
import { GrClose } from 'react-icons/gr'
import { Alert } from '../modals/alert';
import { Timeline } from './timeline';
import { CreateRegisterContext } from '../providers/createRegisterContext';

export const PrefsRegister = () => {
    const { setDisplay, message, setMessage, showAlert, setShowAlert, userData, setUserData } = useContext(CreateRegisterContext);
    const [ email, setEmail ] = useState();
    const { token } = useParams();
    const [emotional, setEmotional] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [legal, setLegal] = useState(false);
    const [labor,setLabor] = useState(false);
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
        if (emotional) {data.push("Apoyo emocional")}
        if (admin) {data.push("Orientación sobre trámites")}
        if (legal) {data.push("Orientación laboral")} 
        if (labor) {data.push("Orientación sobre temas legales")}
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
                setMessage("Registro completo")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                    setDisplay("login")
                }, 3000)

            } else {
                setMessage("Ha habido un error, inténtelo de nuevo")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000)
            }
    }
    
    return (

        <div className='prefsContainer'>

            <div className="prefsHeader">


                <div className='regTitle'><h1>Se parte de la comunidad</h1></div>
                <div className='GrCloseBig'><GrClose /></div>


            </div>
            <div><Timeline /></div>
            <div className='formContainer'>
                    <input className={!emotional ? "prefsButton": "clicked"}
                            type="button"
                            value="Apoyo emocional"
                            onClick={() => setEmotional(!emotional)}
                            />
                    <input className={!admin ? "prefsButton": "clicked"}
                            type="button"
                            value="Orientación sobre trámites"
                            onClick={() => setAdmin(!admin)}
                            />
                    <input className={!labor ? "prefsButton": "clicked"}
                            type="button"
                            value="Orientación laboral"
                            onClick={() => setLabor(!labor)}
                             />
                    <input className={!legal ? "prefsButton": "clicked"}
                            type="button"
                            value="Orientación sobre temas legales"
                            onClick={() => setLegal(!legal)} 
                            />
                    <div className='messageBox'>
                        {showAlert && <Alert message={message} />}
                    </div>
                    <input className='contButton' type="button" onClick={updateUser} value="Finalizar" />
            </div>
        </div>
    )
}
