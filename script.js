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

/* EDUCATION */
const eduOutput=document.getElementById("cv-education");
eduOutput.innerHTML="";
document.querySelectorAll("#education-section .edu").forEach(e=>{
if(e.children[0].value.trim())
eduOutput.innerHTML+=`<p><strong>${e.children[0].value}</strong><br>${e.children[1].value}</p>`;
});

/* LANGUAGE */
const langOutput=document.getElementById("cv-language");
langOutput.innerHTML="";
document.querySelectorAll("#language-section input").forEach(l=>{
if(l.value.trim()) langOutput.innerHTML+=`<li>${l.value}</li>`;
});

/* SKILLS */
const skillOutput=document.getElementById("cv-skills");
skillOutput.innerHTML="";
document.querySelectorAll("#skill-section input").forEach(s=>{
if(s.value.trim()) skillOutput.innerHTML+=`<li>${s.value}</li>`;
});

/* EXPERIENCE */
const expOutput=document.getElementById("cv-experience");
expOutput.innerHTML="";
document.querySelectorAll("#experience-section .exp").forEach(e=>{
if(e.children[0].value.trim())
expOutput.innerHTML+=`<p><strong>${e.children[0].value}</strong><br>${e.children[1].value}</p>`;
});

/* PHOTO */
const file=document.getElementById("photo").files[0];
if(file){
const reader=new FileReader();
reader.onload=e=>{
document.getElementById("cv-photo").src=e.target.result;
};
reader.readAsDataURL(file);
}
}

/* ADD FUNCTIONS */
function addEducation(){
const d=document.createElement("div");
d.className="edu";
d.innerHTML='<input placeholder="Institution Name"><textarea placeholder="Description"></textarea>';
document.getElementById("education-section").appendChild(d);
}

function addLanguage(){
if(document.querySelectorAll("#language-section input").length>=5) return;
const i=document.createElement("input");
i.placeholder="Language";
document.getElementById("language-section").appendChild(i);
}

function addSkill(){
const i=document.createElement("input");
i.placeholder="Skill";
document.getElementById("skill-section").appendChild(i);
}

function addExperience(){
const d=document.createElement("div");
d.className="exp";
d.innerHTML='<input placeholder="Institution Name"><textarea placeholder="Description"></textarea>';
document.getElementById("experience-section").appendChild(d);
}

/* HIGH QUALITY PDF */
function downloadPDF(){
const element=document.getElementById("cv");
html2pdf().set({
margin:0,
filename:"Student_CV.pdf",
image:{type:'jpeg',quality:1},
html2canvas:{scale:4,useCORS:true},
jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}
}).from(element).save();
}
