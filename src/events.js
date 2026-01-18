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