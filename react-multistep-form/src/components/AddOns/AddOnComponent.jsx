import AddOnOption from "./AddOnOption"

export default function AddOnComponent(){
    return(
        <div>
            <div className="flex flex-col gap-3">
                <AddOnOption
                option="Online service"
                description="Access to multiplayer games"
                price="+$10"
                />
                <AddOnOption 
                option="Larger storage"
                description="Extra 1TB of cloud save"
                price="+$20"
                />
                <AddOnOption 
                option="Customizable profile"
                description="Custom theme on your profile"
                price="+$20"
                />
            </div>
        </div>
    )
}