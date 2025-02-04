export default function SummaryComponent(){
    const selectedPlan = localStorage.getItem('selectedPlan');

    return (
        <div>
            {selectedPlan === "monthly" && (
                <h1>test</h1>
            )}
            
            {selectedPlan === "yearly" && (
                <h1>test2</h1>
            )}
        </div>
    )
}