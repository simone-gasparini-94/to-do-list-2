import "./styles/styles.css";
import { createToDo } from "./todo";

function main() {
    const todo = createToDo(
        "groceries",
        "buy bread",
        "19-01-25",
        "high",
        "preferably dark bread",
        false);
    console.log(todo);
}

main();