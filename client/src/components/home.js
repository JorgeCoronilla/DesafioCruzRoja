import React, { useState } from 'react'
import { CreateHomeContext } from './providers/createHomeContext'
import { CategoryFinder } from './home/categoryFinder';
import { SlideEmotional } from './home/slideEmotional';

export const Home = () => {
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState("");
  const [display, setDisplay] = useState("main");



  return (
    <CreateHomeContext.Provider value={{ display, setDisplay, message, setMessage, showAlert, setShowAlert }}>
      <CategoryFinder />
      <SlideEmotional />
    </CreateHomeContext.Provider>
  )
}
