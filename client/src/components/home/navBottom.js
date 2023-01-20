import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { FiUser } from "react-icons/fi";


export const NavBottom = ({ setDisplay, display }) => {
    const home = () =>{
        setDisplay('main')
    }
    const inBox = () =>{
        setDisplay('inbox')
    }
    return (
        <div>
            <div className='navBotoomContainer'>        
                    <div onClick={home}><RiHome5Line/></div>
                    <div onClick={inBox}><AiOutlineMail/></div>
                    <div ><HiOutlineHeart/></div>
                    <div ><FiUser/></div>
            </div>

        </div>
    )
}

