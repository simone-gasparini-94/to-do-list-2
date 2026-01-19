import "./styles/styles.css";
import {
    addToDoToActiveProject,
    createProjectList,
    findActiveProject
} from "./projects";
import { createToDo } from "./todo";
import { 
    renderProjects,
    renderToDos
} from "./ui";
import {
    bindAddToDoBtn,
    bindSubmitForm
} from "./events";

function main() {
    let projects = createProjectList();
    renderProjects(projects);
    bindAddToDoBtn();
    bindSubmitForm((title, description,
        dueDate, priority,
        notes, checklist) => {
            const todo = createToDo(
                title, description,
                dueDate, priority,
                notes, checklist
            );
            const active = findActiveProject(projects);
            addToDoToActiveProject(todo, active);
            renderToDos(active.toDoList);
        }
    );
}

main();