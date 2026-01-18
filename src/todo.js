export function createToDo
    (title, description, dueDate,
        priority, notes, checklist) {
    const id = crypto.randomUUID();
    return {
        id,
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist,
    };
}