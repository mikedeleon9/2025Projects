import "../index.css"

export default function Buttons({onNext, onBack, currentPage}){
    return(
        <div className="flex justify-between">
         {currentPage > 0 &&   <button onClick={onBack} className="bg-(--navy) text-white px-6 py-1 rounded-lg cursor-pointer">Back</button>}
            <button onClick={onNext} className='bg-(--navy) text-white px-6 py-1 rounded-lg cursor-pointer'>Next</button>
        </div>
    )
}