import React from 'react'
import { ReactComponent as Reward } from '../../media/expertos.svg';
import { ReactComponent as Community } from '../../media/comunidad.svg';
export const Search = ({ setDisplay }) => {
    const search = () => {
        setDisplay('list')
    }
    return (
        <div >
            <div>

            </div>
            <div>

            </div>
            <div className='search1'>
                <div><p className='search1P' onClick={search}>Expertos</p></div>
                <div className='searchIcon'><p ><Reward /></p></div>
            </div>
            <div className='search2'>
            <div><p className='search1P' onClick={search}>Comunidad</p></div>
                <div className='searchIcon2'><p ><Community /></p></div>
            </div>
        </div>
    )
}

/*
<div><p className='search1P' onClick={search}>Comunidad</p></div>
                <div className='searchIcon'><p ><Reward /></p></div>
*/