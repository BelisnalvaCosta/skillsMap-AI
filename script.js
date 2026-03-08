let skills = []

function addSkill(){

let input = document.getElementById("skillInput")

if(input.value === "") return

skills.push(input.value)

let li = document.createElement("li")

li.textContent = input.value

document.getElementById("skillList").appendChild(li)

input.value = ""

}

function detectCategory(skill){

skill = skill.toLowerCase()

if(
skill.includes("html") ||
skill.includes("javascript") ||
skill.includes("python") ||
skill.includes("java") ||
skill.includes("programação")
){

return "Tecnologia"

}

if(
skill.includes("organização") ||
skill.includes("planejamento") ||
skill.includes("gestão")
){

return "Organização"

}

if(
skill.includes("comunicação") ||
skill.includes("ensino") ||
skill.includes("explicação")
){

return "Comunicação"

}

return "Habilidade Geral"

}

function analyzeSkills(){

let analysisDiv = document.getElementById("analysis")

analysisDiv.innerHTML = "<h3>Análise Inteligente</h3>"

skills.forEach(skill =>{

let category = detectCategory(skill)

let p = document.createElement("p")

p.textContent = skill + " → Categoria detectada: " + category

analysisDiv.appendChild(p)

})

}

function generateIncomeIdeas(){

let ideasDiv = document.getElementById("ideas")

ideasDiv.innerHTML = "<h3>Ideias de Renda</h3>"

skills.forEach(skill =>{

let category = detectCategory(skill)

let idea = ""

if(category === "Tecnologia"){

idea =
"Criar sites, automações ou sistemas simples utilizando " + skill

}

else if(category === "Organização"){

idea =
"Oferecer serviço de organização digital para empresas usando " + skill

}

else if(category === "Comunicação"){

idea =
"Criar cursos ou mentorias ensinando " + skill

}

else{

idea =
"Criar consultoria ou serviço baseado na habilidade: " + skill

}

let p = document.createElement("p")

p.textContent = idea

ideasDiv.appendChild(p)

})

}