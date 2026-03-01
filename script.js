document.addEventListener("input", updateCV);

function updateCV(){
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
}

function addEducation(){
const div=document.createElement("div");
div.innerHTML='<input placeholder="Institution Name"><textarea placeholder="Description"></textarea>';
document.getElementById("education-section").appendChild(div);
}

function addLanguage(){
const container=document.getElementById("language-section");
if(container.querySelectorAll("input").length>=5)return;
const input=document.createElement("input");
input.placeholder="Language";
container.appendChild(input);
}

function addSkill(){
const input=document.createElement("input");
input.placeholder="Skill";
document.getElementById("skill-section").appendChild(input);
}

function addExperience(){
const div=document.createElement("div");
div.innerHTML='<input placeholder="Institution Name"><textarea placeholder="Description"></textarea>';
document.getElementById("experience-section").appendChild(div);
}

function downloadPDF(){
html2pdf().set({
margin:0,
filename:'Student_CV.pdf',
html2canvas:{scale:3},
jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}
}).from(document.getElementById("cv")).save();
}
