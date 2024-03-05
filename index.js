/*controle de steps */

const formSteps = document.querySelectorAll('.page');
const totalSteps = formSteps.length;
let currentStep = 1;
const nextButton = document.querySelector('.control.next');
const BackButton = document.querySelector('.control.back');

nextButton.addEventListener('click', goToNextStep);
BackButton.addEventListener('click', goToBackStep);

function changeActiveElement(){
    const stepIndicators = document.querySelectorAll('.step-indicator');

    stepIndicators.forEach((indicator , index) => {
        if (index +1 === currentStep){
            indicator.classList.add('active');
        }else {
            indicator.classList.remove('active');
        }
    });
    
}

function toggleFormStepsDisplay(){
    formSteps.forEach((step, index) => {
        step.computedStyleMap.display = index +1 === currentStep ? 'none' : 'block';
    });
}

function goToNextStep(){
    if (currentStep <= totalSteps){
        const validaCampos = validarIputs(currentStep);
        if (validaCampos == false){
            alert('Preencha todos os campos');
        } else {
            currentStep++;
            changeActiveElement();
            toggleFormStepsDisplay();
        }
    }
}