import playIcon from "./assets/images/icon-play.svg"
import studyIcon from "./assets/images/icon-study.svg"
import workIcon from "./assets/images/icon-work.svg"
import exerciseIcon from "./assets/images/icon-exercise.svg"
import socialIcon from "./assets/images/icon-social.svg"
import selfCareIcon from "./assets/images/icon-self-care.svg"
import Box from './components/Box'


function App() {
 

  return (
    <div className="h-screen flex justify-center  items-center border-2 border-red-500">
      <div className="h-full lg:h-3/4 w-3/4 grid lg:grid-cols-1 lg:grid-cols-4  gap-4 ">
      <div className="border-2 border-green-400 row-span-3 lg:row-span-2"></div>
          <Box 
          color="work-orange"
          icon={workIcon}
          category="Work"
          hours="32"
          lastHours="36"
          ></Box>
          <Box
          color="custom-blue"
          icon={playIcon}
          category="Play"
          hours="10"
          lastHours="8"
          ></Box>
          <Box
          color="study-red"
          icon={studyIcon}
          category="Study"
          hours="4"
          lastHours="7"
          ></Box>
          <Box
          color="exercise-green"
          icon={exerciseIcon}
          category="Exercise"
          hours="4"
          lastHours="5"
          ></Box>
          <Box
          color="social-purple"
          icon={socialIcon}
          category="Social"
          hours="5"
          lastHours="8"
          ></Box>
          <Box
          color="self-care-yellow"
          icon={selfCareIcon}
          category="Self Care"
          hours="2"
          lastHours="2"
          ></Box>
      </div>
      
    </div>
  )
}

export default App
