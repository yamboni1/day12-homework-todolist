import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const todoItems = useSelector((state) => state.todoList.todoList);
    console.log(todoItems);
    return todoItems.map((todoItem) => {
        return (
            <TodoItem
                todoItem={todoItem}
                key={todoItem.id}
            />
        );
    });
};

export default TodoGroup;