import YourInfo from "./YourInfo"
import Heading from "./Heading"

export default function InfoContainer(){

    return(
        <div className="info-container">
            <div className="mb-8">
                <Heading></Heading>
            </div>
         
           <YourInfo></YourInfo>
            
    </div>
    )
}