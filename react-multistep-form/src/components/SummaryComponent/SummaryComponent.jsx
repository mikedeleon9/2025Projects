import { useState, useEffect } from "react";

export default function SummaryComponent() {
    const [selectedPlan, setSelectedPlan] = useState(localStorage.getItem("selectedPlan"));
    const [selectedSubscription, setSelectedSubscription] = useState(localStorage.getItem("selectedSubscription"));
    const [selectedAddOns, setSelectedAddOns] = useState([]);

    // Sync local storage changes
    useEffect(() => {
        const updateAddOns = () => {
            setSelectedAddOns(JSON.parse(localStorage.getItem("selectedAddOns")) || []);
        };

        // Listen for changes to localStorage
        window.addEventListener("storage", updateAddOns);

        // Initialize selected add-ons
        updateAddOns();

        // Cleanup listener on unmount
        return () => window.removeEventListener("storage", updateAddOns);
    }, []);

    return (
        <div>
            <div>
                <p>{selectedSubscription} ({selectedPlan})</p>
                <p>Change</p>
                <hr />
            </div>
            <div>
                <h3>Selected Add-ons:</h3>
                {selectedAddOns.map((addOn, index) => (
                    <p key={index}>{addOn.option} - {addOn.price}</p>
                ))}
            </div>
        </div>
    );
}
