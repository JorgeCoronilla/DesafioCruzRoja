import React from 'react'
import {BsChevronDown} from 'react-icons/bs'
import { Search } from './search';
export const CategoryFinder = ({setPop, pop}) => {

   
    const openCatMenu = () => {
        setPop(!pop);
    }
    return (
        <div>
            <div className='homeContainer'>
                <div className='homeSection1'>
                    <h2>Encuentra a una<br />persona que te<br />pueda ayudar</h2>
                    <div className='submitContainer'>
                        <div className='submitText'>¿En qué necesitas ayuda?</div>
                        <div onClick={openCatMenu}className='findicon'><BsChevronDown/></div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}
