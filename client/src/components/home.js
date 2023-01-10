import React from 'react'
import { CreateHomeContext } from './providers/createHomeContext'

export const Home = () => {
  return (
    <CreateHomeContext.Provider>
 <div>home</div>
    </CreateHomeContext.Provider>
   
  )
}
