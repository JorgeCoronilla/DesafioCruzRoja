import React, {useState, useEffect} from 'react'
import { useContext } from 'react';
import { CreateRegisterContext } from '../providers/createRegisterContext';

export const Timeline = () => {
    const [here, setHere] = useState();
   
    const { display, setDisplay, message, setMessage, showAlert, setShowAlert} = useContext(CreateRegisterContext);

    useEffect(() => {
        if (display === "register") {
            setHere(1)
        }
        if (display === "profile") {
            setHere(2)
        }
        if (display === "prefs") {
            setHere(3)
        }
    }, [])
    console.log(here)
    return (
        <section className="ps-timeline-sec">
        <div className = "container">
            <ol className="ps-timeline">
                <li>
                    <div className="ps-top01">
                        <p>Tus datos de acesso</p>
                    </div>
                    <span className={here ===1 ? "ps-sp-top01 here": "ps-sp-top01"}>1</span>
                </li>
                <li>
                    <div className="ps-top02">
                        <p>Tu perfil</p>
                    </div>
                    <span className={here === 2 ? "ps-sp-top02 here": "ps-sp-top02"}>2</span>
                </li>
                <li>
                    <div className="ps-top0">
                        <p>Tus preferencias</p>
                    </div>
                    <span className={here === 3 ? "ps-sp-top03 here": "ps-sp-top03"}>3</span>
                </li>
            </ol>
        </div>
    </section>
    )
}

