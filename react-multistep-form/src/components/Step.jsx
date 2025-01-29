export default function Step(props){
    return(
        <>
            <div class="step">
                <span class="number">{props.step}</span>
                <div class="step-info">
                    <p class="text-step">Step {props.step}</p>
                    <p class="text-md font-semibold">{props.description}</p>
                </div>
            </div>
        </>
    )
}