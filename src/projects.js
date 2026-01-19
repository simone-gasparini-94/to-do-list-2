export function createProjectList() {
    let projects = [];
    projects.push(createProject("Default", true));
    return projects;
}

export function addProject(projects, name = "Default", active) {
    const project = createProject(name, active);
    projects.push(project);
}

function createProject(name = "Default", active) {
    let toDoList = [];
    return {
        name,
        toDoList,
        active
    };
}

export function findActiveProject(projects) {
    const active = projects.find((project) => project.active);
    return active;
}

export function addToDoToActiveProject(todo, active) {
    active.toDoList.push(todo);
}