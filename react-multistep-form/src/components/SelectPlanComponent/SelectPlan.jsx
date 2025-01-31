import Plans from "./Plans"
import arcadeImage from '../../assets/images/icon-arcade.svg'
import advanceImage from '../../assets/images/icon-advanced.svg'
import proImage from '../../assets/images/icon-pro.svg'

export default function SelectPlan(){
    return(
        <div className="grid grid-cols-3">
            <Plans image={arcadeImage}></Plans>
            <Plans image={advanceImage}></Plans>
            <Plans image={proImage}></Plans>
        </div>
    )
}