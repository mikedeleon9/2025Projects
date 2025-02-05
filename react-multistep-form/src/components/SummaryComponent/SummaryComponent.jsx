export default function SummaryComponent(){
    const selectedSubscription = localStorage.getItem('selectedSubscription');
    

    return (
        <div>
         {selectedSubscription === "Arcade" && (
            <p>Test Arcade</p>
         )}
         {selectedSubscription === "Advanced" && (
            <p>Test Advanced</p>
         )}
         {selectedSubscription === "Pro" && (
            <p>Test Pro</p>
         )}
        </div>
    )
}