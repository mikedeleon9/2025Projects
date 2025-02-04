import {useState, useEffect} from "react"

export default function AddOnOption({option, description, price}) {

    const [selectedAddOns, setSelectedAddOns] = useState(() => {
        const savedAddOns = JSON.parse(localStorage.getItem('selectedAddOns')) || [];
        return savedAddOns;
    })

    useEffect(()=> {
        localStorage.setItem("selectedAddOns", JSON.stringify(selectedAddOns));
    }, [selectedAddOns]);

    const handleChange = () => {
        setSelectedAddOns(prev => {
            if (prev.includes(option)) {
                return prev.filter(addOn => addOn !== option); // Remove if already selected
            } else if (prev.length < 3) {
                return [...prev, option]; // Add if less than 3 are selected
            }
            return prev; // Prevent selecting more than 3
        });
    };

    return(
        <div className="border-1 w-full p-4 rounded-lg flex items-center justify-between cursor-pointer">
            <div className="flex gap-6">
                <input checked={selectedAddOns.includes(option)} onChange={handleChange} type="checkbox"></input>
                <div>
                    <p className="text-md font-bold text-(--navy)">{option}</p>
                    <p className="text-sm/4 text-gray-400">{description}</p>
                </div>
            </div>
            <p>{price}</p>
        </div>
    )
}