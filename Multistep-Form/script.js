const infoContainer = document.querySelector('.info-container')
const stepNumbers = document.querySelectorAll('.number');
let currentStep = 1;
const blueColor = 'hsl(206, 94%, 87%)';
const backButton = document.querySelector('.back-button');

function updateNumbers(){
    stepNumbers.forEach(number => {
        number.style.background = '';
        number.style.color = '';

        if(parseInt(number.textContent) === currentStep){
            number.style.background = blueColor;
            number.style.color = 'black'
        } 
    
    })
}

updateNumbers();

function nextStep(){
    currentStep++;

    updateNumbers();

    if(currentStep === 2){
        selectPlan();
        backButton.style.opacity = '1';
        
    }
    else if(currentStep === 3){
        addOns();
    }
    
};

function previousStep(){
    currentStep--;

    updateNumbers();

    if(currentStep === 2){
        selectPlan();
        backButton.style.opacity = '1';
        
    }
    else if(currentStep === 3){
        addOns();
    }
}

function selectPlan(){
    infoContainer.innerHTML = `
        'test'
    `
}

function addOns(){
    infoContainer.innerHTML = `
        second test
    `
}


