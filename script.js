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
html2pdf().set({
margin:0,
filename:'Student_CV.pdf',
html2canvas:{scale:3},
jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}
}).from(document.getElementById("cv")).save();
}
