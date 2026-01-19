export function isDatainStorage(string) {
    if (localStorage.getItem(string)) {
        return true;
    } else {
        return false;
    }
}

export function load(string) {
    const data = localStorage.getItem(string);
    return JSON.parse(data);
}

export function save(string, data) {
    localStorage.setItem(string, JSON.stringify(data));
}