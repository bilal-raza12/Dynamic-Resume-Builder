var _a, _b, _c, _d, _e;
// Function to add education fields
function addEducation() {
    var _a;
    var educationSection = document.getElementById('education-section');
    var newEducation = document.createElement('div');
    newEducation.classList.add('form-group');
    newEducation.innerHTML = "\n        <label>Degree:</label>\n        <select>\n            <option value=\"PhD\">PhD</option>\n            <option value=\"Masters\">Masters</option>\n            <option value=\"Inter\">Intermediate</option>\n            <option value=\"Matric\">Matric</option>\n        </select>\n        <label>Institute:</label>\n        <input type=\"text\" placeholder=\"Enter institute name\">\n        <label>Year:</label>\n        <input type=\"text\" placeholder=\"Enter year\">\n        <button type=\"button\" class=\"remove-education\">\u2212 Remove</button>\n    ";
    educationSection === null || educationSection === void 0 ? void 0 : educationSection.appendChild(newEducation);
    // Add event listener for remove button
    (_a = newEducation.querySelector('.remove-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        educationSection === null || educationSection === void 0 ? void 0 : educationSection.removeChild(newEducation);
    });
}
// Function to add work experience fields
function addExperience() {
    var _a;
    var experienceSection = document.getElementById('experience-section');
    var newExperience = document.createElement('div');
    newExperience.classList.add('form-group');
    newExperience.innerHTML = "\n        <label>Organization:</label>\n        <input type=\"text\" placeholder=\"Enter organization name\">\n        <label>Position:</label>\n        <input type=\"text\" placeholder=\"Enter position\">\n        <label>Duration:</label>\n        <input type=\"text\" placeholder=\"Enter duration\">\n        <button type=\"button\" class=\"remove-experience\">\u2212 Remove</button>\n    ";
    experienceSection === null || experienceSection === void 0 ? void 0 : experienceSection.appendChild(newExperience);
    // Add event listener for remove button
    (_a = newExperience.querySelector('.remove-experience')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        experienceSection === null || experienceSection === void 0 ? void 0 : experienceSection.removeChild(newExperience);
    });
}
// Function to add skills fields
function addSkill() {
    var _a;
    var skillsSection = document.getElementById('skills-section');
    var newSkill = document.createElement('div');
    newSkill.classList.add('form-group');
    newSkill.innerHTML = "\n        <input type=\"text\" placeholder=\"Enter skill\">\n        <button type=\"button\" class=\"remove-skill\">\u2212 Remove</button>\n    ";
    skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.appendChild(newSkill);
    // Add event listener for remove button
    (_a = newSkill.querySelector('.remove-skill')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.removeChild(newSkill);
    });
}
// Function to add project fields
function addProject() {
    var _a;
    var projectsSection = document.getElementById('projects-section');
    var newProject = document.createElement('div');
    newProject.classList.add('form-group');
    newProject.innerHTML = "\n        <label>Project Name:</label>\n        <input type=\"text\" placeholder=\"Enter project name\">\n        <label>Description:</label>\n        <textarea rows=\"4\" cols=\"50\" placeholder=\"Describe the project\"></textarea>\n        <button type=\"button\" class=\"remove-project\">\u2212 Remove</button>\n    ";
    projectsSection === null || projectsSection === void 0 ? void 0 : projectsSection.appendChild(newProject);
    // Add event listener for remove button
    (_a = newProject.querySelector('.remove-project')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        projectsSection === null || projectsSection === void 0 ? void 0 : projectsSection.removeChild(newProject);
    });
}
// Function to add certification fields
function addCertification() {
    var _a;
    var certificationsSection = document.getElementById('certifications-section');
    var newCertification = document.createElement('div');
    newCertification.classList.add('form-group');
    newCertification.innerHTML = "\n        <label>Certification Name:</label>\n        <input type=\"text\" placeholder=\"Enter certification name\">\n        <button type=\"button\" class=\"remove-certification\">\u2212 Remove</button>\n    ";
    certificationsSection === null || certificationsSection === void 0 ? void 0 : certificationsSection.appendChild(newCertification);
    // Add event listener for remove button
    (_a = newCertification.querySelector('.remove-certification')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        certificationsSection === null || certificationsSection === void 0 ? void 0 : certificationsSection.removeChild(newCertification);
    });
}
// Adding event listeners for "Add" buttons
(_a = document.querySelector('.add-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addEducation);
(_b = document.querySelector('.add-experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', addExperience);
(_c = document.querySelector('.add-skill')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', addSkill);
(_d = document.querySelector('.add-project')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', addProject);
(_e = document.querySelector('.add-certification')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', addCertification);
