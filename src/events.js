import { dom } from "./dom";
import { 
    show,
    hide
} from "./ui";

export function bindAddToDo() {
    dom.addToDo.addEventListener("click", () => {
        show(dom.toDoForm);
        hide(dom.addToDo);
    });
}

export function bindAddProject() {
    dom.addProject.addEventListener("click", () => {
        show(dom.projectForm);
        hide(dom.addProject);
    });
}

export function bindSubmitToDoForm(callback) {
    dom.toDoForm.addEventListener("submit", () => {
        hide(dom.toDoForm);
        show(dom.addToDo);
        const f = dom.toDoForm.elements;
        callback(f.title.value, f.description.value,
            f.dueDate.value, f.priority.value,
            f.notes.value, f.checklist.checked);
    });
}

export function bindSubmitProjectForm(callback) {
    dom.projectForm.addEventListener("submit", () => {
        hide(dom.projectForm);
        show(dom.addProject);
        const f = dom.projectForm.elements;
        callback(f.title.value);
    });
}

export function bindSelectProject(callback) {
    dom.projects.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        callback(id);
    });
}

export function bindDeleteToDo(callback) {
    dom.toDoList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const id = e.target.closest(".to-do").dataset.id;
            callback(id);
        }
    });
}

export function bindDeleteProject(callback) {
    dom.deleteProject.addEventListener("click", () => {
        callback()
    });
}