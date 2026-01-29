function createForm() {
    return {
        add: false,
        edit: false
    };
}

export function createForms() {
    let todo = createForm();
    let project = createForm();
    return {
        todo,
        project
    }
}