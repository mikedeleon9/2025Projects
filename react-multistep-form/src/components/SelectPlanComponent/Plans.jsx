

export default function Plans(props){
    return(
        <div className="border-1 rounded-lg border-(--navy) p-3 flex flex-col items-start justify-between gap-6">
            <img src={props.image}></img>
            <div className="">
            <p className="text-sm font-bold">{props.option}</p>
            <p className="text-sm text-gray-400">${props.price} /mo</p>
            </div>
        </div>
    )
}