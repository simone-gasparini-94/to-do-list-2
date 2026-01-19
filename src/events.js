import { dom } from "./dom";
import { 
    show,
    hide
} from "./ui";

export function bindAddToDoBtn() {
    dom.addToDo.addEventListener("click", () => {
        show(dom.toDoForm);
        hide(dom.addToDo);
    });
}

export function bindAddProject() {
    dom.addProject.addEventListener("click", () => {
        show(dom.projectForm);
        hide(dom.addProject);
    })
}

export function bindSubmitToDoForm(callback) {
    dom.toDoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        hide(dom.toDoForm);
        show(dom.addToDo);
        const f = dom.toDoForm.elements;
        callback(f.title.value, f.description.value,
            f.dueDate.value, f.priority.value,
            f.notes.value, f.checklist.value);
    });
}

export function bindSubmitProjectForm(callback) {
    dom.projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        hide(dom.projectForm);
        show(dom.addProject);
        const f = dom.projectForm.elements;
        callback(f.title.value);
    });
}