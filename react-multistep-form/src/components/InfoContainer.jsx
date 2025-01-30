import InputField from "./inputField"

export default function InfoContainer(){

    return(
        <div className="info-container">
            <div className="mb-8">
                <h2 className=" text-3xl font-bold mb-2">Personal info</h2>
                <p className="text-sm">Please provide your name, email address, and phone number.</p>
            </div>
            <div className="flex flex-col gap-4">
            <InputField label="Name" placeholder="e.g. stephen King"></InputField>
            <InputField label="Email Address" placeholder="e.g. stephenking@lorem.com"></InputField>
            <InputField label="Phone Number" placeholder="e.g. +1 234 567 890"></InputField>
            </div>
    </div>
    )
}