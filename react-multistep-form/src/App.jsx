import { useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'


function App() {
  

  return (
    <div className="flex items-center  justify-center w-screen h-screen bg-[#f0f6ff]">
 <div class="container w-3/5 p-4 h-4/5 bg-white rounded-xl grid grid-cols-3">
 <Sidebar></Sidebar>
 <div class="personal-info flex flex-col gap-4 col-span-2 px-16 py-8 justify-between">
  
 </div>
 </div>
  
    </div>
  )
}

export default App
