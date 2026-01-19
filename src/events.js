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

export function bindSubmitForm(callback) {
    dom.toDoForm.addEventListener("submit", (e) => {
        hide(dom.toDoForm);
        show(dom.addToDo);
        e.preventDefault();
        const f = dom.toDoForm.elements;
        console.log(f.title.value);
        callback(f.title.value, f.description.value,
            f.dueDate.value, f.priority.value,
            f.notes.value, f.checklist.value);
    });
}