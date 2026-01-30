export function createToDo
    (title, description, dueDate,
        priority, notes, checklist) {
    const id = crypto.randomUUID();
    let edit = false;
    return {
        id,
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist,
        edit
    };
}

export function findToDoIndex(list, id) {
    const index = list.findIndex((element) => element.id === id);
    return index;
}

export function findToDoEdit(list) {
    const todo = list.find((element) => element.edit);
    return todo;
}

export function editToDo
    (todo, title, description, dueDate,
        priority, notes, checklist) {
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    todo.notes = notes;
    todo.checklist = checklist;
    todo.edit = false;
}