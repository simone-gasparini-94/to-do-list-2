import "./styles/styles.css";
import {
    addToDoToProject,
    createProjectList
} from "./projects";
import { createToDo } from "./todo";
import { renderProjects } from "./ui";
import { bindAddToDoBtn } from "./events";

function main() {
    let projects = createProjectList();
    renderProjects(projects);
    bindAddToDoBtn();
}

main();