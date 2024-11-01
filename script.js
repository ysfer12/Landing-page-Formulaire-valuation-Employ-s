const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progressBar = document.querySelectorAll(".progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");



let formInfoPerso = document.getElementById("form-one");
let formConactProfessionnelle = document.getElementById("form-two");
let formSatisfaction = document.getElementById("form-three");
let inputNom = document.getElementById("nom");
let inputAge = document.getElementById("age");
let btnSuivant = document.getElementById("btn-suivant");
let inputEmail = document.getElementById("email");
let inputTelephone = document.getElementById("telephone");
let btnSuivantTwo = document.getElementById("btn-suivant-contact");
let btnSubmit = document.getElementById("btn-submit");
let textAreaSatisfaction = document.getElementById("commentaire");



btnSuivant.addEventListener("click", ()=>{
    if (validateFormStep()) {
                let userNameAndAge = {
                     nom: inputNom.value,
                     age: inputAge.value
                 }
                 localStorage.setItem("userNameAndAge", JSON.stringify(userNameAndAge))
    formStepsNumber++;
    updateFormSteps();
    updateProgress();
        }
} )

btnSuivantTwo.addEventListener("click", ()=>{
    if (validateFormStep()) {
        let userNumAndemail = {
             email: inputEmail.value,
             numPhon: inputTelephone.value
         }
         localStorage.setItem("userNumAndemail", JSON.stringify(userNumAndemail))
formStepsNumber++;
updateFormSteps();
updateProgress();
}
})

btnSubmit.addEventListener("click", ()=>{
    if (validateFormStep()) {
        let userSatisfaction = {
             satisfaction: textAreaSatisfaction.value,
         }
         localStorage.setItem("userSatisfaction", JSON.stringify(userSatisfaction))
formStepsNumber++;
updateFormSteps();
updateProgress();
}
})

let formStepsNumber = 0;
prevBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    formStepsNumber--;
    updateFormSteps();
    updateProgress();
    });
});

function updateFormSteps(){
    formSteps.forEach(formStep=>{
        formStep.classList.contains("form-step-active") && 
        formStep.classList.remove("form-step-active");
    });
    formSteps[formStepsNumber].classList.add("form-step-active");
}

function updateProgress(){
    progressSteps.forEach((progressStep, idx) => {
        if(idx < formStepsNumber + 1){
            progressStep.classList.add('progress-step-active')
            
        }
        else{
            progressStep.classList.remove('progress-step-active');
        }
    });
}

function validateFormStep() {
    let isValid = true;

    const currentFormStep = formSteps[formStepsNumber];
    const inputs = currentFormStep.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
        const errorSpan = input.nextElementSibling;
        
        if (errorSpan && errorSpan.classList.contains("error-message")) { 
            errorSpan.textContent = "";
        }

        if (input.value.trim() === "") {
            isValid = false;
            if (errorSpan) {
                errorSpan.textContent = `Merci de remplir le champ ${input.previousElementSibling.textContent.toLowerCase()}.`;
            }
        }

        if (input.name === "age" && input.value)  {
            const age = parseInt(input.value, 10);
            if (isNaN(age) || age <= 0) {
                isValid = false;
                if (errorSpan) {
                    errorSpan.textContent = "Veuillez entrer un âge valide.";
                }
            }
        }
    });

    return isValid;
}