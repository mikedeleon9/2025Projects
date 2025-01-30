export default function InputField(props){
    return(
        <div class="flex flex-col gap-1">
            <label className="text-(--navy) text-sm font-medium" for="number">{props.label}</label>
            <input className="border-1 border-slate-400 p-2 rounded-lg w-full" id="number" type="number" placeholder={props.placeholder} />
        </div>
    )
}