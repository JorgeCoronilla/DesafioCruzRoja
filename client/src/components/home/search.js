import React from 'react'

export const Search = ({setDisplay}) => {
    const search = () => {
        setDisplay('list')
    }
  return (
    <div >
        <button className='search1' onClick={search}>Expertos</button>
        <button className='search2'>Comunidad</button>
    </div>
  )
}
