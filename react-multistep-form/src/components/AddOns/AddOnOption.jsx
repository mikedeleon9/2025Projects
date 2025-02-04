export default function AddOnOption(props) {
    return(
        <div className="border-1 w-full p-4 rounded-lg flex items-center justify-between cursor-pointer">
            <div className="flex gap-6">
                <input type="checkbox"></input>
                <div>
                    <p className="text-md font-bold text-(--navy)">{props.option}</p>
                    <p className="text-sm/4 text-gray-400">{props.description}</p>
                </div>
            </div>
            <p>{props.price}</p>
        </div>
    )
}