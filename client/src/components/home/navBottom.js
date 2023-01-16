import React, { useContext } from 'react'
import { CreateWelcomeContext } from '../providers/createWelcomeContex';
import { RiHome5Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { FiUser } from "react-icons/fi";


export const NavBotoom = () => {

    const { setDisplay } = useContext(CreateWelcomeContext);
    


    return (
        <div>
            <div className='navBotoomContainer'>
                    
                
                    <div onClick={"home"}><RiHome5Line/></div>
                    <div onClick={"inbox"}><AiOutlineMail/></div>
                    <div onClick={"favs"}><HiOutlineHeart/></div>
                    <div onClick={"favs"}><FiUser/></div>
                

            </div>

        </div>
    )
}
