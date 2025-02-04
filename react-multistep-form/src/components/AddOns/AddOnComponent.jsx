import AddOnOption from "./AddOnOption"

export default function AddOnComponent(){
    const selectedPlan = localStorage.getItem('selectedPlan');

 

    return(
        <div>
            <div className="flex flex-col gap-3">
                <AddOnOption
                option="Online service"
                description="Access to multiplayer games"
                price={`+$${selectedPlan === "monthly" ? '1/mo' : "10/yr"}`}
                />
                <AddOnOption 
                option="Larger storage"
                description="Extra 1TB of cloud save"
                price={`+$${selectedPlan === "monthly" ? '2/mo' : "20/yr"}`}
                />
                <AddOnOption 
                option="Customizable profile"
                description="Custom theme on your profile"
                price={`+$${selectedPlan === "monthly" ? '2/mo' : "20/yr"}`}
                />
            </div>
        </div>
    )
}