import { useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import "./index.css"
import InfoContainer from './components/InfoContainer'
import Buttons from './components/Buttons'

function App() {
  

  return (
    <div className="flex items-center  justify-center w-screen h-screen bg-[#f0f6ff]">
      <div className="container w-3/5 h-4/5 p-4 bg-white rounded-xl grid grid-cols-3">
          <Sidebar></Sidebar>
        <div className="personal-info flex flex-col col-span-2 px-12 py-8 justify-between">
          
            <InfoContainer></InfoContainer>
          
           <Buttons></Buttons>
        </div>
        
      </div>
      
    </div>
  )
}

export default App
