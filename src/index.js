import "./styles/styles.css";
import {
    addToDoToActiveProject,
    createProjectList
} from "./projects";
import { renderProjects } from "./ui";
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
            const todo = createTodo(
                title,
                description,
                dueDate,
                priority,
                notes,
                checklist
            );
            addToDoToActiveProject(todo, projects);
        }
    )
}

main();