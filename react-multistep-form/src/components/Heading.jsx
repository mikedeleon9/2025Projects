export default function Heading({currentPage}){
    return(
        <>
        
         <h2 className=" text-3xl font-bold mb-2">
           {currentPage === 0 && "Personal Info" }
           {currentPage === 1 && "Select Plan" }
            </h2> 
            <p className="text-sm mb-6">Please provide your name, email address, and phone number.</p>
        </>
    )
}