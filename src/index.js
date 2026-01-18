import "./styles/styles.css";
import {
    addToDoToProject,
    createProjectList
} from "./projects";
import { createToDo } from "./todo";
import { renderProjects } from "./ui";
import { bindAddToDo } from "./events";

function main() {
    let projects = createProjectList();
    const todo = createToDo(
        "groceries",
        "buy groceries",
        "tomorrow",
        "high",
        "get milk",
        false);
    addToDoToProject(todo, projects);
    renderProjects(projects);
    bindAddToDo((todo) => {
        addToDoToProject(todo, projects);
        renderProjects(projects);
    })
    console.log(projects);
}

main();