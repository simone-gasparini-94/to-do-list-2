import {
    addToDoToProject,
    createInitialProjects
} from "./projects";
import "./styles/styles.css";
import { createToDo } from "./todo";

function main() {
    let projects = createInitialProjects();
    const todo = createToDo("groceries");
    addToDoToProject(todo, projects);
    console.log(projects);
}

main();