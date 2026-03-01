// ===== ADD SECTIONS =====

function addEducation(){
const div = document.createElement("div");
div.classList.add("edu-block");
div.innerHTML = `
<input placeholder="Institution Name">
<textarea placeholder="Description"></textarea>
`;
document.getElementById("education-section").appendChild(div);
}

function addLanguage(){
const container = document.getElementById("language-section");
if(container.querySelectorAll("input").length >= 5) return;

const input = document.createElement("input");
input.placeholder = "Language";
container.appendChild(input);
}

function addSkill(){
const input = document.createElement("input");
input.placeholder = "Skill Name";
document.getElementById("skill-section").appendChild(input);
}

function addExperience(){
const div = document.createElement("div");
div.classList.add("exp-block");
div.innerHTML = `
<input placeholder="Institution Name">
<textarea placeholder="Description"></textarea>
`;
document.getElementById("experience-section").appendChild(div);
}


// ===== GENERATE CV =====

function generateCV(){

// Fade animation start
const cv = document.getElementById("cv");
cv.style.transition = "opacity 0.3s ease";
cv.style.opacity = "0";

// Basic Info
document.getElementById("cv-name").textContent =
document.getElementById("name").value || "YOUR NAME";

document.getElementById("cv-title").textContent =
document.getElementById("title").value || "Student";

document.getElementById("cv-profile").textContent =
document.getElementById("profile").value;

document.getElementById("cv-phone").textContent =
document.getElementById("phone").value;

document.getElementById("cv-email").textContent =
document.getElementById("email").value;

document.getElementById("cv-address").textContent =
document.getElementById("address").value;


// ===== EDUCATION =====
const eduDiv = document.getElementById("cv-education");
eduDiv.innerHTML = "";

document.querySelectorAll("#education-section .edu-block").forEach(block=>{
const inst = block.querySelector("input").value;
const desc = block.querySelector("textarea").value;

if(inst.trim() !== ""){
eduDiv.innerHTML += `
<p><strong>${inst}</strong><br>${desc}</p>
`;
}
});


// ===== LANGUAGE =====
const langUl = document.getElementById("cv-language");
langUl.innerHTML = "";

document.querySelectorAll("#language-section input").forEach(input=>{
if(input.value.trim() !== ""){
langUl.innerHTML += `<li>${input.value}</li>`;
}
});


// ===== SKILLS =====
const skillUl = document.getElementById("cv-skills");
skillUl.innerHTML = "";

document.querySelectorAll("#skill-section input").forEach(input=>{
if(input.value.trim() !== ""){
skillUl.innerHTML += `<li>${input.value}</li>`;
}
});


// ===== EXPERIENCE =====
const expDiv = document.getElementById("cv-experience");
expDiv.innerHTML = "";

document.querySelectorAll("#experience-section .exp-block").forEach(block=>{
const inst = block.querySelector("input").value;
const desc = block.querySelector("textarea").value;

if(inst.trim() !== ""){
expDiv.innerHTML += `
<p><strong>${inst}</strong><br>${desc}</p>
`;
}
});


// ===== PHOTO UPLOAD =====
const file = document.getElementById("photo").files[0];

if(file){
const reader = new FileReader();
reader.onload = function(e){
document.getElementById("cv-photo").src = e.target.result;
}
reader.readAsDataURL(file);
}


// Fade animation end
setTimeout(()=>{
cv.style.opacity = "1";
},300);

}
