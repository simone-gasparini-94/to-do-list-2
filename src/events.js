import { dom } from "./dom";
import { 
    show,
    hide,
    toggleHidden,
    toggleNameShowMore
} from "./ui";

export function bindAddToDo() {
    dom.addToDo.addEventListener("click", () => {
        form.project
        show(dom.toDoForm);
    });
}

export function bindAddProject(form) {
    dom.addProject.addEventListener("click", () => {

        show(dom.projectForm);
    });
} 

export function bindEditProject(form) {
    dom.editProject.addEventListener("click", () => {
        console.log("edit project");
    });
}

export function bindSubmitToDoForm(callback) {
    dom.toDoForm.addEventListener("submit", () => {
        hide(dom.toDoForm);
        const f = dom.toDoForm.elements;
        callback(f.title.value, f.description.value,
            f.dueDate.value, f.priority.value,
            f.notes.value, f.checklist.checked);
    });
}

export function bindSubmitProjectForm(callback) {
    dom.projectForm.addEventListener("submit", () => {
        hide(dom.projectForm);
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
            if (!id) return;
            callback(id);
        }
    });
}

export function bindShowMore() {
    dom.toDoList.addEventListener("click", (e) => {
        if (e.target.classList.contains("show-more")) {
            const todo = e.target.closest(".to-do");
            if (!todo) return;
            toggleHidden(todo.querySelector(".description"));
            toggleHidden(todo.querySelector(".priority"));
            toggleHidden(todo.querySelector(".notes"));
            toggleNameShowMore(e.target);
        }
    })
}

export function bindDeleteProject(callback) {
    dom.deleteProject.addEventListener("click", () => {
        callback()
    });
}