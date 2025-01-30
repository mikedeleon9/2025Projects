import "../input.css"

export default function Step(props){
    return(
        <>
            <div className="step flex text-black items-center  gap-4 ">
                <span className="number rounded-full border-1 px-3 py-1 cursor-pointer border-white text-white">{props.step}</span>
                <div className="step-info">
                    <p className="text-step text-sm uppercase text-[#d6d9e6]">Step {props.step}</p>
                    <p className="text-md font-semibold text-white">{props.description}</p>
                </div>
            </div>
        </>
    )
}