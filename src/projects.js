export function createProjectList() {
    let projects = [];
    projects.push(createProject("default", true));
    return projects;
}

export function addProject(projects, name = "default", active) {
    const project = createProject(name, active);
    projects.push(project);
}

function createProject(name = "default", active) {
    let toDoList = [];
    return {
        name,
        toDoList,
        active
    };
}

export function addToDoToProject(todo, projects) {
    projects.forEach(element => {
        if (element.active) element.toDoList.push(todo);
    });
}