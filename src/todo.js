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