import React from 'react'

export const Alert = ({message}) => {
  return (
    <div className='alertContainer'>         
        <div className='alertBox'>
                   <p>{message}</p>
            </div>
    </div>
  )
}
