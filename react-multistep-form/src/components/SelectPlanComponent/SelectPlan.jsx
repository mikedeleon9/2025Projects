import {useState} from "react"
import Plans from "./Plans"
import arcadeImage from '../../assets/images/icon-arcade.svg'
import advanceImage from '../../assets/images/icon-advanced.svg'
import proImage from '../../assets/images/icon-pro.svg'


export default function SelectPlan(){

    const [selected, setSelected] = useState(() => {
        return localStorage.getItem("selectedPlan") || "monthly";
    });

    const [selectedSubscription, setSelectedSubscription] = useState(() => {
        return localStorage.getItem("selectedSubscription") || "Arcade";
    });

    const handleChange = (checkbox) => {
        setSelected((prevSelected) => {
          const newSelection = checkbox === prevSelected ? null : checkbox;
          localStorage.setItem("selectedPlan", newSelection); // Save to localStorage
          return newSelection;
        });
      };

      const handleSubscriptionChange = (subscription) => {
        setSelectedSubscription(subscription);
        localStorage.setItem("selectedSubscription", subscription);
    };


    return(
        <div className="flex flex-col gap-8 ">
        <div className="grid grid-cols-3 gap-4 max-h-42">
            <div onClick={() => handleSubscriptionChange("Arcade")}>
            <Plans  image={arcadeImage} option="Arcade" price={selected === "monthly" ? "9/mo" : "90/yr"}/>
            </div>
            <div onClick={() => handleSubscriptionChange("Advanced")}>
            <Plans  image={advanceImage} option="Advanced" price={selected === "monthly" ? "12/mo" : "120/yr"}/>
            </div>
            <div onClick={() => handleSubscriptionChange("Pro")}>
            <Plans  image={proImage} option="Pro" price={selected === "monthly" ? "15/mo" : "150/yr"}/>
            </div>
        </div>
        <div className="flex items-center justify-center bg-gray-100 p-1 rounded-lg gap-8">
            <div className="flex gap-2">
            <input checked={selected === "monthly"} 
           onChange={() => handleChange("monthly")}
            type="checkbox"></input>
            <p> Monthly</p>
            </div>
            <div className="flex gap-2">
            <input checked={selected === "yearly"}
            onChange={() => {handleChange("yearly")}}  
            type="checkbox"></input>
            <p> Yearly</p>
            </div>
        </div>
        </div>
    )
}