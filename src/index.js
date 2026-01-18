import "./styles/styles.css";
import {
    addToDoToProject,
    createProjectList
} from "./projects";
import { createToDo } from "./todo";
import { renderProjects } from "./ui";

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
    console.log(projects);
}

main();