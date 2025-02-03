import { useState } from 'react';
import { CurrentPageContext } from './components/CurrentPageContext';
import Sidebar from './components/Sidebar'
import './App.css'
import "./index.css"
import SelectPlan from './components/SelectPlanComponent/SelectPlan'
import YourInfo from './components/YourInfo/YourInfo'
import Heading from './components/Heading'
import Buttons from './components/Buttons'

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1)
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev -1 : 1))
  };

  return (
    <CurrentPageContext.Provider value={currentPage}>
    <div className="flex items-center  justify-center w-screen h-screen bg-[#f0f6ff]">
      <div className="container w-3/5 h-4/5 p-4 bg-white rounded-xl grid grid-cols-3">
          <Sidebar currentPage={currentPage}></Sidebar>
        <div className="personal-info flex flex-col col-span-2 px-12 gap-4 py-8 justify-between ">
          <div className="flex flex-col gap-2 ">
          <Heading></Heading>
           
          {currentPage === 1 && <YourInfo />}
          {currentPage === 2 && <SelectPlan />}
          </div>
           <Buttons onBack={prevPage} onNext={nextPage} currentPage={currentPage}></Buttons>
        </div>
        
      </div>
      
    </div>
    </CurrentPageContext.Provider>
  )
}

export default App
