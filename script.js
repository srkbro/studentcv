function generateCV() {
    document.getElementById("cv-name").innerText =
        document.getElementById("name").value;

    document.getElementById("cv-title").innerText =
        document.getElementById("title").value;

    document.getElementById("cv-objective").innerText =
        document.getElementById("objective").value;

    document.getElementById("cv-education").innerText =
        document.getElementById("education").value;

    document.getElementById("cv-skills").innerText =
        document.getElementById("skills").value;

    document.getElementById("cv-project").innerText =
        document.getElementById("project").value;
}

function downloadPDF() {
    var element = document.getElementById("cv");
    html2pdf().from(element).save("My_CV.pdf");
}
