function addEducation(){
const div = document.createElement("div");
div.innerHTML = `
<input placeholder="Institution Name">
<textarea placeholder="Description"></textarea>
`;
document.getElementById("education-section").appendChild(div);
}

function addLanguage(){
if(document.querySelectorAll("#language-section input").length>=5) return;
const input = document.createElement("input");
input.placeholder="Language";
document.getElementById("language-section").appendChild(input);
}

function addSkill(){
const input = document.createElement("input");
input.placeholder="Skill";
document.getElementById("skill-section").appendChild(input);
}

function addExperience(){
const div = document.createElement("div");
div.innerHTML = `
<input placeholder="Institution Name">
<textarea placeholder="Description"></textarea>
`;
document.getElementById("experience-section").appendChild(div);
}

function generateCV(){

document.getElementById("cv-name").textContent =
document.getElementById("name").value;

document.getElementById("cv-title").textContent =
document.getElementById("title").value;

document.getElementById("cv-profile").textContent =
document.getElementById("profile").value;

document.getElementById("cv-phone").textContent =
document.getElementById("phone").value;

document.getElementById("cv-email").textContent =
document.getElementById("email").value;

document.getElementById("cv-address").textContent =
document.getElementById("address").value;

const eduDiv = document.getElementById("cv-education");
eduDiv.innerHTML="";
document.querySelectorAll("#education-section div").forEach(e=>{
eduDiv.innerHTML+=`<p><strong>${e.children[0].value}</strong><br>${e.children[1].value}</p>`;
});

const langUl = document.getElementById("cv-language");
langUl.innerHTML="";
document.querySelectorAll("#language-section input").forEach(l=>{
langUl.innerHTML+=`<li>${l.value}</li>`;
});

const skillUl = document.getElementById("cv-skills");
skillUl.innerHTML="";
document.querySelectorAll("#skill-section input").forEach(s=>{
skillUl.innerHTML+=`<li>${s.value}</li>`;
});

const expDiv = document.getElementById("cv-experience");
expDiv.innerHTML="";
document.querySelectorAll("#experience-section div").forEach(e=>{
expDiv.innerHTML+=`<p><strong>${e.children[0].value}</strong><br>${e.children[1].value}</p>`;
});

const file = document.getElementById("photo").files[0];
if(file){
const reader = new FileReader();
reader.onload = function(e){
document.getElementById("cv-photo").src = e.target.result;
}
reader.readAsDataURL(file);
}
}
