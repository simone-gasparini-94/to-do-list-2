import "./styles/styles.css";
import {
    addProject,
    addToDoToActiveProject,
    createProjectList,
    findActiveProject,
    setProjectToActive
} from "./projects";
import { createToDo } from "./todo";
import { 
    renderProjects,
    renderToDos
} from "./ui";
import {
    bindAddToDoBtn,
    bindAddProject,
    bindSubmitToDoForm,
    bindSubmitProjectForm,
    bindSelectProject
} from "./events";

function main() {
    let projects = createProjectList();
    renderProjects(projects);
    bindAddToDoBtn();
    bindSubmitToDoForm((title, description,
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
    bindAddProject();
    bindSubmitProjectForm((title) => {
        addProject(projects, title);
        renderProjects(projects);
    });
    bindSelectProject((id) => {
        setProjectToActive(projects, id);
        renderProjects(projects);
    });
}

main();