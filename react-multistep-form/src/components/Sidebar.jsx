import React from "react"

function Sidebar(){
    return(
    <div class="side-bar flex flex-col gap-4 border-red-400 p-6 bg-[url(./multi-step-form-main/multi-step-form-main/assets/images/bg-sidebar-desktop.svg)] bg-cover bg-bottom rounded-xl">
        <div class="step">
            <span class="number">1</span>
            <div class="step-info">
                <p class="text-step">Step 1</p>
                <p class="text-md font-semibold">YOUR INFO</p>
            </div>
        </div>
        <div class="step">
            <span class="number">2</span>
            <div class="step-info">
                <p class="text-step">Step 2</p>
                <p class="text-md font-semibold">SELECT PLAN</p>
            </div>
        </div>
        <div class="step">
            <span class="number">3</span>
            <div class="step-info">
                <p class="text-step">Step 3</p>
                <p class="text-md font-semibold">ADD-ONS</p>
            </div>
        </div>
        <div class="step">
            <span class="number">4</span>
            <div class="step-info">
                <p class="text-step">Step 4</p>
                <p class="text-md font-semibold">SUMMARY</p>
            </div>
        </div>
   
</div>
    )
}

export default Sidebar;