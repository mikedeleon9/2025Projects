import "../index.css"

export default function Buttons(){
    return(
        <div className="flex justify-between">
            <button className="bg-(--navy) text-white px-6 py-1 rounded-lg cursor-pointer">Back</button>
            <button className='bg-(--navy) text-white px-6 py-1 rounded-lg cursor-pointer'>Next</button>
        </div>
    )
}