import InputField from "./inputField"

export default function YourInfo(){
    return(
        <div className="flex flex-col gap-4">
            <InputField label="Name" placeholder="e.g. stephen King"></InputField>
            <InputField label="Email Address" placeholder="e.g. stephenking@lorem.com"></InputField>
            <InputField label="Phone Number" placeholder="e.g. +1 234 567 890"></InputField>
    </div>
    )
}