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
    bindAddToDo,
    bindAddProject,
    bindSubmitToDoForm,
    bindSubmitProjectForm,
    bindSelectProject,
    bindDeleteToDo
} from "./events";
import {
    projectsString, 
    save
} from "./storage";

function main() {
    let projects = createProjectList();
    renderProjects(projects);
    bindAddToDo();
    bindAddProject();
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
            save(projectsString, projects);
        }
    );
    bindSubmitProjectForm((title) => {
        addProject(projects, title);
        renderProjects(projects);
    });
    bindSelectProject((id) => {
        setProjectToActive(projects, id);
        renderProjects(projects);
    });
    bindDeleteToDo((id) => {
        console.log(id);
    })
}

main();