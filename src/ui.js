const dom = {
    projects: document.querySelector(".projects-container"),
    toDoList: document.querySelector(".to-do-container")
}

export function renderProjects(projects) {
    projects.forEach((project) => {
        renderProject(project);
        if (project.active) {
            renderToDos(project.toDoList);
        }
    });
}

function renderProject(project) {
    const button = document.createElement("button");
    button.classList.add("project");
    button.textContent = project.name;
    dom.projects.appendChild(button);
}

export function renderToDos(toDoList) {
    toDoList.forEach((toDo) => {
        renderToDo(toDo);
    });
}

function renderToDo(toDo) {
    const div = document.createElement("div");
    div.classList.add("to-do");
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = toDo.title;
    div.appendChild(title);
    dom.toDoList.appendChild(div);
}