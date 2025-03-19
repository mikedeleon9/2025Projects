import ellipsisIcon from "../assets/images/icon-ellipsis.svg"

function Box(props){
    return(
        <div className="">
            
            <div className=" h-full flex items-start justify-end relative rounded-2xl" style={{ backgroundColor: `var(--${props.color})` }}>
                <img className="px-4" src={props.icon} alt="play" />
                <div className="flex flex-col justify-evenly px-6 py-4 absolute bottom-0 w-full h-3/4 rounded-xl bg-[var(--dark-blue)]">
                    <div className="flex items-center justify-between">
                    <p className="text-white">{props.category}</p>
                    <img src={ellipsisIcon} alt="ellipsis" />
                    </div>
                    
                    <div class="">
                    <p className="text-sm md:text-lg lg:text-xl xl:text-3xl 2xl:text-5xl text-white">{props.hours}hrs</p>
                    <p className="text-white">Last Week - {props.lastHours}hrs</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Box; 