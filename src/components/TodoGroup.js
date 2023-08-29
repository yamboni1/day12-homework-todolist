import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const todoItems = useSelector((state) => state.todoList.todoList);
    return todoItems.map((todoItem, index) => {
        return <TodoItem todoItem={todoItem} key={todoItem.id} index={index} />;
    });
};

export default TodoGroup;
