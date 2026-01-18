import "./styles/styles.css";
import {
    createProjectList
} from "./projects";
import { renderProjects } from "./ui";
import {
    bindAddToDoBtn,
    bindSubmitForm
} from "./events";

function main() {
    let projects = createProjectList();
    renderProjects(projects);
    bindAddToDoBtn();
    bindSubmitForm()
}

main();