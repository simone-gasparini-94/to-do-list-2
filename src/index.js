import "./styles/styles.css";
import {
    addProject,
    editProject,
    deleteProject,
    addToDo,
    removeToDo,
    createProjectList,
    findActiveProject,
    setProjectToActive,
    setFirstProjectToActive
} from "./projects";
import { 
    createToDo,
    findToDoIndex,
    findToDoEdit,
    editToDo
} from "./todo";
import { 
    renderProjects,
    renderToDos,
    hideMainSection,
    showMainSection
} from "./ui";
import {
    bindAddToDo,
    bindEditToDo,
    bindAddProject,
    bindEditProject,
    bindSubmitToDoForm,
    bindSubmitProjectForm,
    bindSelectProject,
    bindDeleteToDo,
    bindDeleteProject,
    bindShowMoreToDo
} from "./events";
import { projectsString, save } from "./storage";
import { createForms } from "./form";

function main() {
    const projects = createProjectList();
    if (projects.length === 0) hideMainSection();
    const forms = createForms();
    renderProjects(projects);
    bindProjectEvents(projects, forms);
    bindToDoEvents(projects, forms);
}

function bindProjectEvents(projects, forms) {
    bindAddProject(() => {
        forms.project.add = true;
        forms.project.edit = false;
    });
    bindEditProject(() => {
        forms.project.edit = true;
        forms.project.add = false;
    });
    bindSubmitProjectForm((name) => {
        try {
            if (forms.project.add === true) {
                addProject(projects, name);
                if (projects.length === 1) showMainSection();
            } else if (forms.project.edit === true) {
                const active = findActiveProject(projects);
                editProject(projects, active, name);
            }
        } catch (err) {
            alert(err.message);
        }
        renderProjects(projects);
    });
    bindSelectProject((id) => {
        setProjectToActive(projects, id);
        renderProjects(projects);
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
    });
}

function bindToDoEvents(projects, forms) {
    bindAddToDo(() => {
        forms.todo.add = true;
        forms.todo.edit = false;
    });
    bindEditToDo((id) => {
        forms.todo.edit = true;
        forms.todo.add = false;
        const active = findActiveProject(projects);
        const index = findToDoIndex(active.toDoList, id);
        const todo = active.toDoList[index];
        todo.edit = true;
    });
    bindSubmitToDoForm((title, description,
        dueDate, priority,
        notes, checklist) => {
            const active = findActiveProject(projects);
            if (forms.todo.add === true) {
                const todo = createToDo(
                    title, description,
                    dueDate, priority,
                    notes, checklist
                );
                addToDo(todo, active);
            } else if (forms.todo.edit === true) {
                const todo = findToDoEdit(active.toDoList);
                editToDo(todo, title, description, 
                    dueDate, priority,
                    notes, checklist);
            }
            renderToDos(active.toDoList);
            save(projectsString, projects);
        }
    );
    bindShowMoreToDo();
    bindDeleteToDo((id) => {
        const active = findActiveProject(projects);
        const index = findToDoIndex(active.toDoList, id);
        removeToDo(index, active);
        renderToDos(active.toDoList);
        save(projectsString, projects);
    });

}

main();