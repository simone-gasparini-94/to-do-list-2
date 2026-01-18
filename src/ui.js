const dom = {
    projects: document.querySelector(".projects-container")
}

export function renderProjects(projects) {
    projects.forEach((element) => {
        renderProject(element);
    })
}

function renderProject(project) {
    const button = document.createElement("button");
    button.classList.add("project");
    button.textContent = project.name;
    dom.projects.appendChild(button);
}