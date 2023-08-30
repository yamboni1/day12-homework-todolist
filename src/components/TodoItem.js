import { useDispatch } from "react-redux";
import { resetTodoTask } from "./todoListSlice";
import * as todoApi from "./../apis/todoApi";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const toggleItem = async () => {
        await todoApi.updateTodoTask(props.todoItem.id, {
            done: !props.todoItem.done,
        });
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoTask(response.data));
    };

    const deleteItem = async () => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            await todoApi.deleteTodoTask(props.todoItem.id);
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoTask(response.data));

        } else {
            alert("To do item was not deleted");
        }
    };

    return (
        <>
            <div className="todo-item">
                <span
                    className={
                        props.isDone ? "" : props.todoItem.done ? "done" : ""
                    }
                    onClick={toggleItem}
                >
                    {props.todoItem.text}
                </span>
                {props.isDone ? (
                    ""
                ) : (
                    <button onClick={deleteItem}>
                        x
                    </button>
                )}
            </div>
        </>
    );
};

export default TodoItem;
