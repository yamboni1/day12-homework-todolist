import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const todoItems = useSelector((state) => state.todoList.todoList);

    return <div className="items">
        {
            todoItems.map((todoItem) => {
                return (

                    <TodoItem
                        todoItem={todoItem}
                        key={todoItem.id}
                    />
                );

            })}

    </div>
};

export default TodoGroup;