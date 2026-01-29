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
    appendElement(todo, "p", toDo.title, "title", false);
    appendElement(todo, "p", toDo.description, "description", true);
    appendElement(todo, "p", toDo.dueDate, "due-date", false);
    appendElement(todo, "p", toDo.priority, "priority", true);
    appendElement(todo, "p", toDo.notes, "notes", true);
    appendElement(todo, "button", "Show more", "show-more", false);
    appendElement(todo, "button", "Edit", "edit-btn", false);
    appendElement(todo, "button", "Delete", "delete-btn", false);
    dom.toDoList.appendChild(todo);
}

function appendElement(todo, type, text, className, hidden) {
    const element = document.createElement(type);
    element.classList.add(className);
    if (hidden) element.classList.add("hidden");
    element.textContent = text;
    todo.appendChild(element);
}

export function toggleNameShowMore(element) {
    if (element.textContent === "Show more") {
        element.textContent = "Show less";
    } else {
        element.textContent = "Show more";
    }
}

export function toggleHidden(element) {
    if (!element) return ;
    element.classList.toggle("hidden");
}

export function show(element) {
    element.classList.remove("hidden");
}

export function hide(element) {
    element.classList.add("hidden");
}

export function hideMainSection() {
    hide(dom.main);
}

export function showMainSection() {
    show(dom.main);
}