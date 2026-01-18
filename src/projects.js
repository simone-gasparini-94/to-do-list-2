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

export function addToDoToActiveProject(todo, projects) {
    projects.forEach(element => {
        if (element.active) element.toDoList.push(todo);
    });
}