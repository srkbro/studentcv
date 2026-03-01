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

document.getElementById("cv-education").textContent =
document.getElementById("education").value;

document.getElementById("cv-language").textContent =
document.getElementById("language").value;

document.getElementById("cv-skills").textContent =
document.getElementById("skills").value;

document.getElementById("cv-experience").textContent =
document.getElementById("experience").value;

const file = document.getElementById("photo").files[0];
if(file){
const reader = new FileReader();
reader.onload = function(e){
document.getElementById("cv-photo").src = e.target.result;
}
reader.readAsDataURL(file);
}
}

function downloadPDF(){
const element = document.getElementById("cv");
html2pdf().set({
margin:0,
filename:'Premium_CV.pdf',
html2canvas:{scale:2},
jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}
}).from(element).save();
}
