function generateCV(){

document.getElementById("cv-name").innerText =
document.getElementById("name").value;

document.getElementById("cv-title").innerText =
document.getElementById("title").value;

document.getElementById("cv-profile").innerText =
document.getElementById("profile").value;

document.getElementById("cv-phone").innerText =
document.getElementById("phone").value;

document.getElementById("cv-email").innerText =
document.getElementById("email").value;

document.getElementById("cv-address").innerText =
document.getElementById("address").value;

document.getElementById("cv-education").innerText =
document.getElementById("education").value;

document.getElementById("cv-language").innerText =
document.getElementById("language").value;

document.getElementById("cv-skills").innerText =
document.getElementById("skills").value;

document.getElementById("cv-experience").innerText =
document.getElementById("experience").value;


// Photo upload
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
html2pdf().from(element).save("Modern_CV.pdf");
}
