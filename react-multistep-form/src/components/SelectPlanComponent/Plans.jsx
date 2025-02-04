import {useState} from "react";

  

export default function Plans(props){
    
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return(
        <div onClick={(handleClick)} className={`border-(--navy) border-1 rounded-lg ${isClicked ? "border-2" : null} p-3 flex flex-col items-start justify-between gap-6`}>
            <img src={props.image}></img>
            <div className="">
            <p className="text-sm font-bold">{props.option}</p>
            <p className="text-sm text-gray-400">${props.price}</p>
            </div>
        </div>
    )
}