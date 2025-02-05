import { useContext } from "react";
import { CurrentPageContext } from "./CurrentPageContext"

export default function Heading({}){

    const currentPage = useContext(CurrentPageContext)
    return(
        <>
        
         <h2 className=" text-3xl font-bold mb-2">
           {currentPage === 1 && "Personal Info" }
           {currentPage === 2 && "Select Plan" }
           {currentPage === 3 && "Pick add-ons"}
           {currentPage === 4 && "Finshing Up"}
            </h2> 
            <p className="text-sm mb-6">
               {currentPage === 1 && "Please provide your name, email address, and phone number."}
               {currentPage === 2 && "You have the option of monthly or yearly billing."}
               {currentPage === 3 && "Add-Ons help enhance your gaming experience."}
               {currentPage === 4 && "Double-check everything looks OK before confirming."}
                </p>
        </>
    )
}