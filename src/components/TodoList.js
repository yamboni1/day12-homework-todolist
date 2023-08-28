import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoGroup todoItems={["First", "Second"]} />
            <TodoGenerator />
        </div>
    );
};

export default TodoList;
