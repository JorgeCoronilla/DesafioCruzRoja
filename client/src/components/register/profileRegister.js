import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { defaultFetch } from '../helpers/defaultFetch';
import { GrClose } from 'react-icons/gr'
import { Alert } from '../modals/alert';
import { Timeline } from './timeline';
import { CreateRegisterContext } from '../providers/createRegisterContext';
import Select from 'react-select'
import { ReactComponent as Close } from '../../media/cerrar.svg';
import { ReactComponent as Logo } from '../../media/logo.svg';

export const ProfileRegister = () => {
    const { setDisplay, message, setMessage, showAlert, setShowAlert, userData, setUserData } = useContext(CreateRegisterContext);
    const [email, setEmail] = useState();
    const { token } = useParams();
    const [gender, setGender] = useState();
    const [region, setRegion] = useState();
    const [language, setLanguage] = useState();
    const [working, setWorking] = useState();
    const [inSpain, setInSpain] = useState();

    // Comprueba si el token de la url es válido
    useEffect(() => {
        defaultFetch("http://cuevos3.westeurope.cloudapp.azure.com:3001/check-email", "POST", { token: token })
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
    const handleYearsIn = (select) => {
        setGender(select.value)
    }
    //Actualiza el usuario que se está registrando
    const updateUser = async e => {
        e.preventDefault();
        console.log(inSpain);
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
        const res = await defaultFetch("http://cuevos3.westeurope.cloudapp.azure.com:3001/registerProf", "POST", newUser)
        if (res.mensaje) {
            setMessage("A continuación ajustaremos sus preferencias")
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false);
                setDisplay("prefs")
            }, 2000)

        } else {
            setMessage("Ha habido un error, inténtelo de nuevo")
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false);
            }, 2000)
        }

    }
    const optionsGender = [
        { value: 'Femenino', label: 'Femenino' },
        { value: 'Masculino', label: 'Masculino' },
        { value: 'No especificar', label: 'No especificar' }
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
            <div className='formContainer'>
                <form onSubmit={updateUser}>
                    <div className='inputContainer'>
                        <label>¿Cuál es tu año de nacimento?</label>
                        <input type="text" name='birth' required minLength="4" maxLength="4" />
                    </div>
                    <div className='inputContainer'>
                        <label>Género</label>
                        <Select options={optionsGender}
                            placeholder="Selecciona género"
                            components={{ IndicatorSeparator: () => null }}
                            onChange={handleGender}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            required />
                    </div>
                    <div className='inputContainer'>
                        <label>¿De qué región eres</label>
                        <Select options={optionsRegion}
                            placeholder="Selecciona región"
                            components={{ IndicatorSeparator: () => null }}
                            onChange={handleRegion}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            required />
                    </div>
                    <div className='inputContainer'>
                        <label>¿Cuál es tu lengua materna?</label>
                        <Select options={optionsLng}
                            placeholder="Selecciona idioma"
                            isMulti
                            onChange={handleLanguage}
                            components={{ IndicatorSeparator: () => null }}
                            getOptionValue={option => option.value}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            required />
                    </div>
                    <div className='checkContainer'>
                        <label className='primLabel'>¿Trabajas?</label>
                        <div className='checkBlock'>
                            <label className='scdLabel'>Sí</label>

                            <input
                                type="checkbox"
                                name="work"
                                checked={working === "Yes"}
                                onChange={() => setWorking("Yes")}
                                className="check"

                            />

                        </div>
                        <div className='checkBlock'>
                            <label className='scdLabel'>No</label>
                            <input
                                type="checkbox"
                                name="work"
                                checked={working === "No"}
                                onChange={() => setWorking("No")}
                                className="check"

                            />

                        </div>
                        <div className='checkBlock'>
                            <label className='scdLabel'>No especificar</label>
                            <input
                                type="checkbox"
                                name="work"
                                checked={working === "No especificar"}
                                onChange={() => setWorking("No Especificar")}
                                className="check"
                            />
                        </div>
                    </div>
                    <div className='checkContainer'>
                        <label className='primLabel'>Años en España</label>
                        <div className='checkBlock'>
                            <label className='scdLabel'>Menos de 6 meses</label>
                            <input
                                type="checkbox"
                                name="inSpain"
                                checked={inSpain === "Menos de 6 meses"}
                                onChange={() => setInSpain("Menos de 6 meses")}
                                className="check"
                            />

                        </div>
                        <div className='checkBlock'>
                            <label className='scdLabel'>De 6 meses a 1 año</label>
                            <input
                                type="checkbox"
                                name="inSpain"
                                checked={inSpain === "De 6 meses a 1 año"}
                                onChange={() => setInSpain("De 6 meses a 1 año")}
                                className="check"
                            />

                        </div>
                        <div className='checkBlock'>
                            <label className='scdLabel'>De 1 año a 2 años</label>
                            <input
                                type="checkbox"
                                name="inSpain"
                                checked={inSpain === "De 1 año a 2 años"}
                                onChange={() => setInSpain("De 1 año a 2 años")}
                                className="check"
                            />
                        </div>
                        <div className='checkBlock'>
                            <label className='scdLabel'>Más de dos años</label>
                            <input
                                type="checkbox"
                                name="inSpain"
                                checked={inSpain === "more than 24 months"}
                                onChange={() => setInSpain("Más de 2 años")}
                                className="check"
                            />
                        </div>
                    </div>
                    
                    <div className='inputRegister'>
                    <input className='contButton' type="submit" value="Continuar" />
                    <div className='messageRegister'>
                        {showAlert && <Alert message={message} />}
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
