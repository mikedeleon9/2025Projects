import { useContext } from "react";
import { CurrentPageContext } from "./CurrentPageContext"

export default function Heading({}){

    const currentPage = useContext(CurrentPageContext)
    return(
        <>
        
         <h2 className=" text-3xl font-bold mb-2">
           {currentPage === 0 && "Personal Info" }
           {currentPage === 1 && "Select Plan" }
            </h2> 
            <p className="text-sm mb-6">
               {currentPage === 0 && "Please provide your name, email address, and phone number."}
               {currentPage === 1 && "You have the option of monthly or yearly billing."}
                </p>
        </>
    )
}