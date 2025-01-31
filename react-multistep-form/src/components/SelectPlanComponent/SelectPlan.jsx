import Plans from "./Plans"
import arcadeImage from '../../assets/images/icon-arcade.svg'
import advanceImage from '../../assets/images/icon-advanced.svg'
import proImage from '../../assets/images/icon-pro.svg'

export default function SelectPlan(){
    return(
        <div className="grid grid-cols-3 gap-4">
            <Plans image={arcadeImage} option="Arcade" price="9"/>
            <Plans image={advanceImage} option="Pro" price="12"/>
            <Plans image={proImage} option="Advanced" price="15"/>
        </div>
    )
}