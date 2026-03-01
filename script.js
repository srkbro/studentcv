document.addEventListener("input",()=>{updateCV();saveData();});

function updateCV(){
document.getElementById("cv-name").textContent=name.value||"YOUR NAME";
document.getElementById("cv-title").textContent=title.value||"Student";
document.getElementById("cv-profile").textContent=profile.value;
document.getElementById("cv-phone").textContent=phone.value;
document.getElementById("cv-email").textContent=email.value;
document.getElementById("cv-address").textContent=address.value;

cvEducation.innerHTML="";
document.querySelectorAll("#education-section .edu").forEach(e=>{
if(e.children[0].value.trim())
cvEducation.innerHTML+=`<p><strong>${e.children[0].value}</strong><br>${e.children[1].value}</p>`;
});

cvLanguage.innerHTML="";
document.querySelectorAll("#language-section input").forEach(l=>{
if(l.value.trim()) cvLanguage.innerHTML+=`<li>${l.value}</li>`;
});

cvSkills.innerHTML="";
document.querySelectorAll("#skill-section input").forEach(s=>{
if(s.value.trim()) cvSkills.innerHTML+=`<li>${s.value}</li>`;
});

cvExperience.innerHTML="";
document.querySelectorAll("#experience-section .exp").forEach(e=>{
if(e.children[0].value.trim())
cvExperience.innerHTML+=`<p><strong>${e.children[0].value}</strong><br>${e.children[1].value}</p>`;
});

const file=document.getElementById("photo").files[0];
if(file){const reader=new FileReader();
reader.onload=e=>{cvPhoto.src=e.target.result;}
reader.readAsDataURL(file);}
}

function addEducation(){
const d=document.createElement("div");
d.className="edu";
d.innerHTML='<input placeholder="Institution Name"><textarea placeholder="Description"></textarea>';
education-section.appendChild(d);
}

function addLanguage(){
if(document.querySelectorAll("#language-section input").length>=5)return;
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

function saveData(){
localStorage.setItem("cvData",JSON.stringify({
name:name.value,title:title.value,profile:profile.value,
phone:phone.value,email:email.value,address:address.value
}));
}

window.onload=()=>{
const data=JSON.parse(localStorage.getItem("cvData")||"{}");
name.value=data.name||"";title.value=data.title||"";
profile.value=data.profile||"";phone.value=data.phone||"";
email.value=data.email||"";address.value=data.address||"";
updateCV();
}

function downloadPDF(){
html2pdf().set({margin:0,filename:"Student_CV.pdf",
html2canvas:{scale:3},
jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}})
.from(document.getElementById("cv")).save();
}
