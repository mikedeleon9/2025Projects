import React from "react"
import Step from './Step'



function Sidebar(){
    return(
        <div className="`side-bar flex flex-col gap-4 p-6 bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover bg-bottom rounded-xl">
            <Step step="1" description="YOUR INFO"></Step>
            <Step step='2' description='SELECT PLAN'></Step>
            <Step step='3' description='ADD-ONS'></Step>
            <Step step='4' description='SUMMARY'></Step>   
        </div>
    )
}

export default Sidebar;