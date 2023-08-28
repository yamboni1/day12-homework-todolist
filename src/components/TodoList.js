import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    const [todoItems, setTodoItems] = useState([]);

    const onAddItem = (item) => {
        setTodoItems(todoItems.concat(item));
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoGroup todoItems={todoItems} />
            <TodoGenerator onAddItem={onAddItem} />
        </div>
    );
};

export default TodoList;
