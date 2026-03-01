document.addEventListener("DOMContentLoaded", function () {

    // AUTO UPDATE
    document.addEventListener("input", function () {
        updateCV();
        saveData();
    });

    loadData();
});

function updateCV() {

    // BASIC
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
    const file = document.getElementById("photo").files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("cv-photo").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}


// ===== ADD FUNCTIONS =====

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


// ===== SAVE SYSTEM =====

function saveData() {

    const data = {
        name: document.getElementById("name").value,
        title: document.getElementById("title").value,
        profile: document.getElementById("profile").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };

    localStorage.setItem("cvData", JSON.stringify(data));
}

function loadData() {

    const saved = JSON.parse(localStorage.getItem("cvData") || "{}");

    document.getElementById("name").value = saved.name || "";
    document.getElementById("title").value = saved.title || "";
    document.getElementById("profile").value = saved.profile || "";
    document.getElementById("phone").value = saved.phone || "";
    document.getElementById("email").value = saved.email || "";
    document.getElementById("address").value = saved.address || "";

    updateCV();
}


// ===== PDF =====

function downloadPDF() {
    html2pdf().set({
        margin: 0,
        filename: "Student_CV.pdf",
        html2canvas: { scale: 3 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }).from(document.getElementById("cv")).save();
}
