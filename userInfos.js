let nom = document.getElementById("name")
let age = document.getElementById("age")
let phonNum = document.getElementById("phonNum")
let email = document.getElementById("email")
let satisfaction = document.getElementById("satisfaction")


let userNameAndAge = JSON.parse(localStorage.getItem("userNameAndAge"))

let userPhonAndEmail = JSON.parse(localStorage.getItem("userNumAndemail"))

let userSatisfaction = JSON.parse(localStorage.getItem("userSatisfaction"))


nom.innerHTML = userNameAndAge.nom
age.innerHTML = userNameAndAge.age

phonNum.innerHTML = userPhonAndEmail.numPhon
email.innerHTML = userPhonAndEmail.email

satisfaction.innerHTML = userSatisfaction.satisfaction