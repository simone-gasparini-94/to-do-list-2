import {
    isDatainStorage,
    load,
    save
} from "./storage"

export function createProjectList() {
    const projectsString = "projects";
    let projects;
    if (isDatainStorage(projectsString) == true) {
        projects = load(projectsString);
    } else {
        projects = [];
        projects.push(createProject("Default", true));
        save(projectsString, projects);
    }  
    return projects;
}

export function addProject(projects, name = "Default") {
    const project = createProject(name, true);
    projects.forEach((project) => project.active = false);
    projects.push(project);
}

function createProject(name = "Default", active) {
    const toDoList = [];
    const id = crypto.randomUUID();
    return {
        id,
        name,
        toDoList,
        active
    };
}

export function findActiveProject(projects) {
    const activeProject = projects.find((project) => project.active);
    return activeProject;
}

export function addToDoToActiveProject(todo, active) {
    active.toDoList.push(todo);
}

export function setProjectToActive(projects, id) {
    setAllProjectsToInactive(projects);
    const project = projects.find((project) => project.id === id);
    project.active = true;
}

function setAllProjectsToInactive(projects) {
    projects.forEach((project) => {
        project.active = false;
    });
}