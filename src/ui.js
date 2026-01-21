import { dom } from "./dom";

export function renderProjects(projects) {
    dom.projects.innerHTML = "";
    projects.forEach((project) => {
        renderProject(project);
        if (project.active) {
            dom.projectName.textContent = project.name;
            renderToDos(project.toDoList);
        }
    });
}

function renderProject(project) {
    const button = document.createElement("button");
    button.classList.add("project");
    button.dataset.id = project.id;
    button.textContent = project.name;
    dom.projects.appendChild(button);
}

export function renderToDos(toDoList) {
    dom.toDoList.innerHTML = "";
    toDoList.forEach((toDo) => {
        renderToDo(toDo);
    });
}

function renderToDo(toDo) {
    const todo = document.createElement("div");
    todo.dataset.id = toDo.id;
    todo.classList.add("to-do");
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = toDo.title;
    todo.appendChild(title);
    const date = document.createElement("p");
    date.classList.add("due-date");
    date.textContent = toDo.dueDate;
    todo.appendChild(date);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    todo.appendChild(deleteBtn);
    dom.toDoList.appendChild(todo);
}

export function show(element) {
    element.classList.remove("hidden");
}

export function hide(element) {
    element.classList.add("hidden");
}