import { useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import "./index.css"
import SelectPlan from './components/SelectPlanComponent/SelectPlan'
import Heading from './components/Heading'
import Buttons from './components/Buttons'

function App() {
  let currentPage = 0;

  return (
    <div className="flex items-center  justify-center w-screen h-screen bg-[#f0f6ff]">
      <div className="container w-3/5 h-4/5 p-4 bg-white rounded-xl grid grid-cols-3">
          <Sidebar></Sidebar>
        <div className="personal-info flex flex-col col-span-2 px-12 gap-4 py-8 justify-between ">
          <div className="flex flex-col gap-2 ">
          <Heading></Heading>
           
          <SelectPlan></SelectPlan>
          </div>
           <Buttons></Buttons>
        </div>
        
      </div>
      
    </div>
  )
}

export default App
