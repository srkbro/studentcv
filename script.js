document.addEventListener("DOMContentLoaded", function () {

    // Live update on input
    document.addEventListener("input", function () {
        updateCV();
    });

    updateCV();
});


function updateCV() {

    // BASIC INFO
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


    // EDUCATION
    const eduOutput = document.getElementById("cv-education");
    eduOutput.innerHTML = "";

    document.querySelectorAll("#education-section .edu").forEach(block => {
        const inst = block.querySelector("input").value;
        const desc = block.querySelector("textarea").value;

        if (inst.trim() !== "") {
            eduOutput.innerHTML += `
                <p><strong>${inst}</strong><br>${desc}</p>
            `;
        }
    });


    // LANGUAGE
    const langOutput = document.getElementById("cv-language");
    langOutput.innerHTML = "";

    document.querySelectorAll("#language-section input").forEach(input => {
        if (input.value.trim() !== "") {
            langOutput.innerHTML += `<li>${input.value}</li>`;
        }
    });


    // SKILLS
    const skillOutput = document.getElementById("cv-skills");
    skillOutput.innerHTML = "";

    document.querySelectorAll("#skill-section input").forEach(input => {
        if (input.value.trim() !== "") {
            skillOutput.innerHTML += `<li>${input.value}</li>`;
        }
    });


    // EXPERIENCE
    const expOutput = document.getElementById("cv-experience");
    expOutput.innerHTML = "";

    document.querySelectorAll("#experience-section .exp").forEach(block => {
        const inst = block.querySelector("input").value;
        const desc = block.querySelector("textarea").value;

        if (inst.trim() !== "") {
            expOutput.innerHTML += `
                <p><strong>${inst}</strong><br>${desc}</p>
            `;
        }
    });


    // PHOTO
    const photoInput = document.getElementById("photo");
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("cv-photo").src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }
}


// ADD FUNCTIONS

function addEducation() {
    const div = document.createElement("div");
    div.className = "edu";
    div.innerHTML = `
        <input placeholder="Institution Name">
        <textarea placeholder="Description"></textarea>
    `;
    document.getElementById("education-section").appendChild(div);
}

function addLanguage() {
    const container = document.getElementById("language-section");

    if (container.querySelectorAll("input").length >= 5) return;

    const input = document.createElement("input");
    input.placeholder = "Language";
    container.appendChild(input);
}

function addSkill() {
    const input = document.createElement("input");
    input.placeholder = "Skill";
    document.getElementById("skill-section").appendChild(input);
}

function addExperience() {
    const div = document.createElement("div");
    div.className = "exp";
    div.innerHTML = `
        <input placeholder="Institution Name">
        <textarea placeholder="Description"></textarea>
    `;
    document.getElementById("experience-section").appendChild(div);
}


// PERFECT SINGLE PAGE PDF
function downloadPDF() {

    const element = document.getElementById("cv");

    html2pdf().set({
        margin: 0,
        filename: "Student_CV.pdf",
        pagebreak: { mode: ['avoid-all'] },
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 3,
            scrollY: 0,
            windowWidth: 794,
            windowHeight: 1123
        },
        jsPDF: {
            unit: 'px',
            format: [794, 1123],
            orientation: 'portrait'
        }
    }).from(element).save();
}
