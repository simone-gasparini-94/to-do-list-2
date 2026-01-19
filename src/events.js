import { dom } from "./dom";
import { 
    render,
    hide
} from "./ui";

export function bindAddToDoBtn() {
    dom.addToDo.addEventListener("click", () => {
        render(dom.toDoForm);
        hide(dom.addToDo);
    });
}

export function bindSubmitForm(callback) {
    dom.toDoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(dom.toDoForm.title);
    })
}