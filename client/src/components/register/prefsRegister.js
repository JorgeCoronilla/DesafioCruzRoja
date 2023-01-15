import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { defaultFetch } from '../helpers/defaultFetch';
import { GrClose } from 'react-icons/gr'
import { Alert } from '../modals/alert';
import { Timeline } from './timeline';

export const PrefsRegister = () => {
    const [preferences, setPreferences] = useState();
    const [emotional, setEmotional] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [legal, setLegal] = useState(false);
    const [labor,setLabor] = useState(false);
    const updateUser = async e => {
        e.preventDefault();
        let data = [];
        console.log(data)
        if (emotional) {data.push("Apoyo emocional")}
        if (admin) {data.push("Orientación sobre trámites")}
        if (legal) {data.push("Orientación laboral")} 
        if (labor) {data.push("Orientación sobre temas legales")}
        var updateUser = {
                        // jwt: token,
                        // user_name: e.target.name_.value,
                        // email: email,
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
                        support_type: data,
                        // expert: false, 
                        // area: region, 
                        // pic: defaultUser
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
                <form>
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
                    <input className='contButton' type="button" onClick={updateUser} value="Finalizar" />
                </form>
            </div>
        </div>
    )
}
