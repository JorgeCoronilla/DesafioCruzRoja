import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { defaultFetch } from '../helpers/defaultFetch';
import { GrClose } from 'react-icons/gr'
import { Alert } from '../modals/alert';
import { Timeline } from './timeline';
import { CreateRegisterContext } from '../providers/createRegisterContext';
import Select from 'react-select'

export const ProfileRegister = () => {
    const { setDisplay, message, setMessage, showAlert, setShowAlert, userData, setUserData } = useContext(CreateRegisterContext);
    const [email, setEmail] = useState();
    const { token } = useParams();
    const { birthdate, setBirthdate } = useState();
    const { gender, setGender } = useState();
    const { region, setRegion } = useState();
    const { language, setlanguage } = useState();
    const { working, setWorking } = useState();
    const { inSpain, setInSpain } = useState();


    // //Comprueba si el toke de la url es válido
    // useEffect(() => {
    //     defaultFetch("http://localhost:3001/check-email", "POST", { token: token })
    //         .then((res) => {
    //             if (res.mensaje) {
    //                 setEmail(res.email);
    //                 console.log(res);
    //             } else {
    //                 setMessage("El enlace es incorrecto o ha expirado")
    //                 setShowAlert(true)
    //                 setTimeout(() => {
    //                     setShowAlert(false);
    //                 }, 3000)
    //             }
    //         })

    // }, [])

    //Inserta el nuevo usuario
    const updateUser = async e => {
        e.preventDefault();
        console.log(e.target.confirmPass.value);
        if (e.target.pass.value === e.target.confirmPass.value) {
            console.log(email);
            var newUser = {
                jwt: token,
                user_name: e.target.name_.value,
                // surname : "",
                // about_me : "",
                // langauges: "",
                email: email,
                // phone : "",
                // studies : "",
                // country : "",
                // age : "",
                // emotional_support : 0,
                // legal_support : 0,
                // collab_individual : false,
                // collab_institution : false,
                // job : false,
                password_: e.target.pass.value,
                // banned_users : {},
                // favs : {}
            }
            const res = await defaultFetch("http://localhost:3001/register", "POST", newUser)
            if (res.mensaje) {
                setMessage("Registro correcto, gracias")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                    setDisplay("preferences")
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
    const optionsGender = [
        { value: 'femenino', label: 'Femenino' },
        { value: 'masculino', label: 'Masculino' },
        { value: 'otro', label: 'No especificar' }
    ]
    const optionsRegion = [
        { value: 'Sierra de la Cabrera', label: 'Sierra de la Cabrera' },
        { value: 'Valle del Jarama', label: 'Valle del Jarama' },
        { value: 'Valle Alto del Lozoya', label: 'Valle Alto del Lozoya' },
        { value: 'Valle Medio del Lozoya', label: 'Valle Medio del Lozoya' },
        { value: 'Valle Bajo del Lozoya', label: 'Valle Bajo del Lozoya' },
        { value: 'Sierra del Rincon', label: 'Sierra del Rincon' },
        { value: 'Otro', label: 'Otro' }
    ]
    const optionsLng = [
        { value: 'Español', label: 'Español' },
        { value: 'Arabe', label: 'Arabe' },
        { value: 'Rumano', label: 'Rumano' },
        { value: 'Ingles', label: 'Ingles' },
        { value: 'Italiano', label: 'Italiano' },
        { value: 'Chino', label: 'Chino' },
        { value: 'Aleman', label: 'Aleman' },
        { value: 'Portugues', label: 'Portugues' },
        { value: 'Ucraniano', label: 'Ucraniano' },
        { value: 'Frances', label: 'Frances' },
        { value: 'Otro', label: 'Otro' }
    ]
    const handleChange = () => {
        console.log("hey!")
    }
    return (

        <div className='profileContainer'>

            <div className="profileHeader">


                <div className='regTitle'><h1>Se parte de la comunidad</h1></div>
                <div className='GrCloseBig'><GrClose /></div>


            </div>
            <div><Timeline /></div>
            <div className='formContainer'>
                <form onSubmit={updateUser}>
                    <div>
                        <label>¿Cuál es tu año de nacimento?</label>
                        <input type="text" name='birth' required minLength="4" maxLength="4" />
                    </div>
                    <div>
                        <label>Género</label>
                        <Select options={optionsGender}
                            placeholder="Selecciona género"
                            components={{ IndicatorSeparator: () => null }} />

                    </div>
                    <div>
                        <label>¿De qué región eres</label>
                        <Select options={optionsRegion}
                            placeholder="Selecciona región"
                            components={{ IndicatorSeparator: () => null }} />

                    </div>
                    <div>
                        <label>¿Cuál es tu lengua materna?</label>
                        <Select options={optionsLng}
                            placeholder="Selecciona idioma" isMulti
                            components={{ IndicatorSeparator: () => null }} />
                    </div>
                    <div className='checkContainer'>
                        <label>¿Trabajas?</label>
                        <div className='checkBlock'>
                            <label>Sí</label>
                            
                                <input
                                    type="checkbox"
                                    name="work"
                                    value="Yes"
                                    onChange={handleChange}
                                />
                        
                        </div>
                        <div className='checkBlock'>
                            <label>No</label>
                            <input
                                type="checkbox"
                                name="work"
                                value="No"
                                onChange={handleChange}
                            />

                        </div>
                        <div className='checkBlock'>
                            <label>Prefiero no responder</label>
                            <input
                                type="checkbox"
                                name="work"
                                value="No answer"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='checkContainer'>
                        <label>Años en España</label>
                        <div className='checkBlock'>
                            <label>Menos de 6 meses</label>
                            <input
                                type="checkbox"
                                name="work"
                                value="Menos de 6 meses"
                                onChange={handleChange}
                            />

                        </div>
                        <div className='checkBlock'>
                            <label>De 6 meses a 1 año</label>
                            <input
                                type="checkbox"
                                name="work"
                                value="De 6 meses a 1 año"
                                onChange={handleChange}
                            />

                        </div>
                        <div className='checkBlock'>
                            <label>De 1 año a 2 años</label>
                            <input
                                type="checkbox"
                                name="work"
                                value="De 1 año a 2 años"
                                onChange={handleChange}
                            />
                        </div>
                        <div className='checkBlock'>
                            <label>Más de dos años</label>
                            <input
                                type="checkbox"
                                name="work"
                                value="Mas de dos años"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='messageBox'>
                        {showAlert && <Alert message={message} />}
                    </div>
                    <input className='contButton' type="submit" value="Continuar" />
                </form>
            </div>
        </div>
    )
}
