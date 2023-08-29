import { useDispatch } from "react-redux";
import { deleteTodoItem, doneTodoItem } from "./todoListSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const markAsDone = () => {
        dispatch(doneTodoItem(props.index));
    };

    const deleteItem = () => {
        if(window.confirm("Do you want to delete this to do item?")){
            dispatch(deleteTodoItem(props.index));
        }else{
            alert("This item is not deleted.")
        }
    };
   

    return (
        <>
            <div className="todo-item">
                <span
                    className={props.todoItem.done ? "done" : ""}
                    onClick={markAsDone}
                >
                    {props.todoItem.text}
                </span>
                
                <button className="done-button" onClick={deleteItem}>
                    x
                </button>
            </div>
        </>
    );
};

export default TodoItem;
