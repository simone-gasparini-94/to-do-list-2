import "./styles/styles.css";
import {
    addProject,
    deleteProject,
    addToDo,
    removeToDo,
    createProjectList,
    findActiveProject,
    findToDoIndex,
    setProjectToActive,
    setFirstProjectToActive
} from "./projects";
import { createToDo } from "./todo";
import { 
    renderProjects,
    renderToDos,
    hideMainSection
} from "./ui";
import {
    bindAddToDo,
    bindAddProject,
    bindSubmitToDoForm,
    bindSubmitProjectForm,
    bindSelectProject,
    bindDeleteToDo,
    bindDeleteProject
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
            addToDo(todo, active);
            renderToDos(active.toDoList);
            save(projectsString, projects);
        }
    );
    bindSubmitProjectForm((title) => {
        try {
            addProject(projects, title);
            renderProjects(projects);
        } catch (err) {
            alert(err.message);
        }
    });
    bindSelectProject((id) => {
        setProjectToActive(projects, id);
        renderProjects(projects);
    });
    bindDeleteToDo((id) => {
        const active = findActiveProject(projects);
        const index = findToDoIndex(active.toDoList, id);
        removeToDo(index, active);
        renderToDos(active.toDoList);
        save(projectsString, projects);
    });
    bindDeleteProject(() => {
        const active = findActiveProject(projects);
        deleteProject(projects, active.id);
        if (projects.length > 0) {
            setFirstProjectToActive(projects);
        } else {
            hideMainSection();
        }
        renderProjects(projects);
    })
}

main();