// Function to add education fields
function addEducation() {
    const educationSection = document.getElementById('education-section');
    const newEducation = document.createElement('div');
    newEducation.classList.add('form-group');
    newEducation.innerHTML = `
        <label>Degree:</label>
        <select>
            <option value="PhD">PhD</option>
            <option value="Masters">Masters</option>
            <option value="Inter">Intermediate</option>
            <option value="Matric">Matric</option>
        </select>
        <label>Institute:</label>
        <input type="text" placeholder="Enter institute name">
        <label>Year:</label>
        <input type="text" placeholder="Enter year">
        <button type="button" class="remove-education">− Remove</button>
    `;
    educationSection?.appendChild(newEducation);

    // Add event listener for remove button
    newEducation.querySelector('.remove-education')?.addEventListener('click', function() {
        educationSection?.removeChild(newEducation);
    });
}

// Function to add work experience fields
function addExperience() {
    const experienceSection = document.getElementById('experience-section');
    const newExperience = document.createElement('div');
    newExperience.classList.add('form-group');
    newExperience.innerHTML = `
        <label>Organization:</label>
        <input type="text" placeholder="Enter organization name">
        <label>Position:</label>
        <input type="text" placeholder="Enter position">
        <label>Duration:</label>
        <input type="text" placeholder="Enter duration">
        <button type="button" class="remove-experience">− Remove</button>
    `;
    experienceSection?.appendChild(newExperience);

    // Add event listener for remove button
    newExperience.querySelector('.remove-experience')?.addEventListener('click', function() {
        experienceSection?.removeChild(newExperience);
    });
}

// Function to add skills fields
function addSkill() {
    const skillsSection = document.getElementById('skills-section');
    const newSkill = document.createElement('div');
    newSkill.classList.add('form-group');
    newSkill.innerHTML = `
        <input type="text" placeholder="Enter skill">
        <button type="button" class="remove-skill">− Remove</button>
    `;
    skillsSection?.appendChild(newSkill);

    // Add event listener for remove button
    newSkill.querySelector('.remove-skill')?.addEventListener('click', function() {
        skillsSection?.removeChild(newSkill);
    });
}

// Function to add project fields
function addProject() {
    const projectsSection = document.getElementById('projects-section');
    const newProject = document.createElement('div');
    newProject.classList.add('form-group');
    newProject.innerHTML = `
        <label>Project Name:</label>
        <input type="text" placeholder="Enter project name">
        <label>Description:</label>
        <textarea rows="4" cols="50" placeholder="Describe the project"></textarea>
        <button type="button" class="remove-project">− Remove</button>
    `;
    projectsSection?.appendChild(newProject);

    // Add event listener for remove button
    newProject.querySelector('.remove-project')?.addEventListener('click', function() {
        projectsSection?.removeChild(newProject);
    });
}

// Function to add certification fields
function addCertification() {
    const certificationsSection = document.getElementById('certifications-section');
    const newCertification = document.createElement('div');
    newCertification.classList.add('form-group');
    newCertification.innerHTML = `
        <label>Certification Name:</label>
        <input type="text" placeholder="Enter certification name">
        <button type="button" class="remove-certification">− Remove</button>
    `;
    certificationsSection?.appendChild(newCertification);

    // Add event listener for remove button
    newCertification.querySelector('.remove-certification')?.addEventListener('click', function() {
        certificationsSection?.removeChild(newCertification);
    });
}

// Adding event listeners for "Add" buttons
document.querySelector('.add-education')?.addEventListener('click', addEducation);
document.querySelector('.add-experience')?.addEventListener('click', addExperience);
document.querySelector('.add-skill')?.addEventListener('click', addSkill);
document.querySelector('.add-project')?.addEventListener('click', addProject);
document.querySelector('.add-certification')?.addEventListener('click', addCertification);