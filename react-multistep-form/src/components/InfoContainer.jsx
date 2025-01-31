import YourInfo from "./YourInfo/YourInfo"
import SelectPlan from "./SelectPlanComponent/SelectPlan"
import Heading from "./Heading"

export default function InfoContainer(){

    return(
        <div className="info-container">
            <div className="mb-8">
                <Heading></Heading>
            </div>
         
           <SelectPlan></SelectPlan>
            
        </div>
    )
}