import {
    projectsString,
    isDataInStorage,
    load,
    save
} from "./storage"

export function createProjectList() {
    let projects;
    if (isDataInStorage(projectsString) == true) {
        projects = load(projectsString);
    } else {
        projects = [];
        projects.push(createProject("Default", true));
        save(projectsString, projects);
    }  
    return projects;
}

export function addProject(projects, name) {
    if (projects.some((element) => element.name === name)) {
        throw new Error(`Project ${name} already exists`);
    }
    projects.forEach((project) => project.active = false);
    const project = createProject(name, true);
    projects.push(project);
    save(projectsString, projects);
}

export function deleteProject(projects, id) {
    const index = projects.findIndex((project) => project.id == id);
    projects.splice(index, 1);
    save(projectsString, projects);
}

function createProject(name, active) {
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

export function addToDo(todo, active) {
    active.toDoList.push(todo);
}

export function setProjectToActive(projects, id) {
    setAllProjectsToInactive(projects);
    const project = projects.find((project) => project.id === id);
    project.active = true;
    save(projectsString, projects);
}

export function setFirstProjectToActive(projects) {
    setProjectToActive(projects, projects[0].id);
}

function setAllProjectsToInactive(projects) {
    projects.forEach((project) => {
        project.active = false;
    });
}

export function findToDoIndex(list, id) {
    const index = list.findIndex((element) => element.id === id);
    return index;
}

export function removeToDo(index, active) {
    active.toDoList.splice(index, 1);
}