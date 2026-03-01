function generateCV() {

    const name = document.getElementById("name").value.trim();
    const title = document.getElementById("title").value.trim();
    const objective = document.getElementById("objective").value.trim();
    const education = document.getElementById("education").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const project = document.getElementById("project").value.trim();

    document.getElementById("cv-name").textContent = name || "Your Name";
    document.getElementById("cv-title").textContent = title || "Career Title";
    document.getElementById("cv-objective").textContent = objective;
    document.getElementById("cv-education").textContent = education;
    document.getElementById("cv-skills").textContent = skills;
    document.getElementById("cv-project").textContent = project;
}


function downloadPDF() {

    const element = document.getElementById("cv");

    const opt = {
        margin: 0.5,
        filename: 'Student_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}
