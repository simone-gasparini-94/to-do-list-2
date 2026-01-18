export function createInitialProjects() {
    let projects = [];
    projects.push(createProject("all", true));
    projects.push(createProject("default", true));
    return projects;
}

export function createProject(name = "default", active) {
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