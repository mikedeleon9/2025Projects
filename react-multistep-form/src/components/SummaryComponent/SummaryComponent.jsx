export default function SummaryComponent(){
    const selectedSubscription = localStorage.getItem('selectedSubscription');
    

    return (
        <div>
         {selectedSubscription === "Arcade" && (
            <p>Test Arcade</p>
         )}
        </div>
    )
}