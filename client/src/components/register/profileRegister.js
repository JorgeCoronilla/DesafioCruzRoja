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
    const [ email, setEmail ] = useState();
    const { token } = useParams();
    const [ gender, setGender ] = useState();
    const [ region, setRegion ] = useState();
    const [ language, setLanguage ] = useState();
    const [ working, setWorking ] = useState();
    const [ inSpain, setInSpain ] = useState();

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
    const handleRegion = (select) => {
        setRegion(select.value)
    }
    const handleGender = (select) => {
        setGender(select.value)
    }
    const handleLanguage = (select) => {
        let selectedOptions = JSON.stringify(select.map(e => {
           return e.value
        }))
        setLanguage(JSON.stringify(selectedOptions))
    }
    //Actualiza el usuario que se está registrando
    const updateUser = async e => {
        e.preventDefault();
            console.log(email);
            var newUser = {
                jwt: token,
                // user_name: e.target.name_.value,
                email: email,
                // password_: e.target.pass.value,
                // user_surname: e.target.surname_.value, 
                // about_me: "", 
                year_birth: e.target.birth.value, 
                gender: gender, 
                // country: "", 
                mother_tongue: language.toString(), 
                years_in: inSpain, 
                working: working, 
                // studies: "", 
                // support_type: "",
                // expert: false, 
                // area: region, 
                // pic: defaultUser
            } 
            const res = await defaultFetch("http://localhost:3001/registerProf", "POST", newUser)
            if (res.mensaje) {
                setMessage("A continuación ajustaremos sus preferencias")
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false);
                    setDisplay("prefs")
                }, 3000)

            } else {
                setMessage("Ha habido un error, inténtelo de nuevo")
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
    
    console.log(language)
    
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
                        <input type="text" name='birth' required minLength="4" maxLength="4"/>
                    </div>
                    <div>
                        <label>Género</label>
                        <Select options={optionsGender}
                            placeholder="Selecciona género"
                            components={{ IndicatorSeparator: () => null }}
                            onChange={handleGender}
                            required />
                    </div>
                    <div>
                        <label>¿De qué región eres</label>
                        <Select options={optionsRegion}
                            placeholder="Selecciona región"
                            components={{ IndicatorSeparator: () => null }} 
                            onChange={handleRegion}
                            required/>
                    </div>
                    <div>
                        <label>¿Cuál es tu lengua materna?</label>
                        <Select options={optionsLng}
                            placeholder="Selecciona idioma" 
                            isMulti
                            onChange={handleLanguage}
                            components={{ IndicatorSeparator: () => null }}
                            getOptionValue={option => option.value}
                            required />
                    </div>
                    <div className='checkContainer'>
                        <label>¿Trabajas?</label>
                        <div className='checkBlock'>
                            <label>Sí</label>
                            
                                <input
                                     type="checkbox"
                                     name="work"
                                     checked={working === "Yes"}
                                     onChange={() => setWorking("Yes")}
                                    
                                />
                        
                        </div>
                        <div className='checkBlock'>
                            <label>No</label>
                            <input
                                type="checkbox"
                                name="work"
                                checked={working === "No"}
                                onChange={() => setWorking("No")}
                                
                            />

                        </div>
                        <div className='checkBlock'>
                            <label>Prefiero no responder</label>
                            <input
                                type="checkbox"
                                name="work"
                                checked={working === "No answer"}
                                onChange={() => setWorking("No answer")}
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
                                checked={inSpain === "Less than 6 months"}
                                onChange={() => setInSpain("Less than 6 months")}
                            />

                        </div>
                        <div className='checkBlock'>
                            <label>De 6 meses a 1 año</label>
                            <input
                                type="checkbox"
                                name="work"
                                checked={inSpain === "from 6 to 12 months"}
                                onChange={() => setInSpain("from 6 to 12 months")}
                            />

                        </div>
                        <div className='checkBlock'>
                            <label>De 1 año a 2 años</label>
                            <input
                                type="checkbox"
                                name="work"
                                checked={inSpain === "from 12 to 24 months"}
                                onChange={() => setInSpain("from 12 to 24 months")}
                            />
                        </div>
                        <div className='checkBlock'>
                            <label>Más de dos años</label>
                            <input
                                type="checkbox"
                                name="work"
                                checked={inSpain === "more than 24 months"}
                                onChange={() => setInSpain("more than 24 months")}
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
