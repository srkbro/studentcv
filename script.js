document.addEventListener("input", updateCV);

function updateCV(){

cvName.textContent = name.value || "YOUR NAME";
cvTitle.textContent = title.value || "Student";
cvProfile.textContent = profile.value;
cvPhone.textContent = phone.value;
cvEmail.textContent = email.value;
cvAddress.textContent = address.value;

/* EDUCATION */
cvEducation.innerHTML="";
document.querySelectorAll("#education-section .edu").forEach(e=>{
if(e.children[0].value.trim())
cvEducation.innerHTML+=`<p><strong>${e.children[0].value}</strong><br>${e.children[1].value}</p>`;
});

/* LANGUAGE */
cvLanguage.innerHTML="";
document.querySelectorAll("#language-section input").forEach(l=>{
if(l.value.trim()) cvLanguage.innerHTML+=`<li>${l.value}</li>`;
});

/* SKILLS */
cvSkills.innerHTML="";
document.querySelectorAll("#skill-section input").forEach(s=>{
if(s.value.trim()) cvSkills.innerHTML+=`<li>${s.value}</li>`;
});

/* EXPERIENCE */
cvExperience.innerHTML="";
document.querySelectorAll("#experience-section .exp").forEach(e=>{
if(e.children[0].value.trim())
cvExperience.innerHTML+=`<p><strong>${e.children[0].value}</strong><br>${e.children[1].value}</p>`;
});

/* PHOTO */
const file = photo.files[0];
if(file){
const reader = new FileReader();
reader.onload = e=>{
cvPhoto.src = e.target.result;
};
reader.readAsDataURL(file);
}
}

/* ADD FUNCTIONS */
function addEducation(){
const d=document.createElement("div");
d.className="edu";
d.innerHTML='<input placeholder="Institution Name"><textarea placeholder="Description"></textarea>';
education-section.appendChild(d);
}

function addLanguage(){
if(document.querySelectorAll("#language-section input").length>=5) return;
const i=document.createElement("input");
i.placeholder="Language";
language-section.appendChild(i);
}

function addSkill(){
const i=document.createElement("input");
i.placeholder="Skill";
skill-section.appendChild(i);
}

function addExperience(){
const d=document.createElement("div");
d.className="exp";
d.innerHTML='<input placeholder="Institution Name"><textarea placeholder="Description"></textarea>';
experience-section.appendChild(d);
}

/* PERFECT SINGLE PAGE PDF */
function downloadPDF(){
const element = document.getElementById("cv");

html2pdf().set({
margin:0,
filename:"Student_CV.pdf",
pagebreak:{mode:['avoid-all']},
image:{type:'jpeg',quality:1},
html2canvas:{
scale:3,
scrollY:0,
windowWidth:794,
windowHeight:1123
},
jsPDF:{
unit:'px',
format:[794,1123],
orientation:'portrait'
}
}).from(element).save();
}
