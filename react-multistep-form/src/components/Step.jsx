import { useContext } from "react";
import { CurrentPageContext } from "./CurrentPageContext"

export default function Step(props){

    const currentPage = useContext(CurrentPageContext);
    const stepNumber = Number(props.step);
    
    return(
        <>
            <div className="step flex text-black items-center  gap-4 ">
                <span className={`number rounded-full border-1 px-3 py-1 cursor-pointer ${currentPage === stepNumber ? 'bg-(--baby-blue) text-black' : 'bg-transparent text-white'} border-white `}>{props.step}</span>
                <div className="step-info">
                    <p className="text-step text-sm uppercase text-[#d6d9e6]">Step {props.step}</p>
                    <p className="text-md font-semibold text-white">{props.description}</p>
                </div>
            </div>
        </>
    )
}