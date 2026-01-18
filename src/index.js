import "./styles/styles.css";
import {
    addToDoToProject,
    createProjectList
} from "./projects";
import { createToDo } from "./todo";
import { renderProjects } from "./ui";

function main() {
    let projects = createProjectList();
    renderProjects(projects);
    const todo = createToDo("groceries");
    addToDoToProject(todo, projects);
    console.log(projects);
}

main();