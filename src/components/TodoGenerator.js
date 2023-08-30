import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetTodoTask } from "./todoListSlice";
import * as todoApi from "./../apis/todoApi";


const TodoGenerator = () => {
    const [itemInput, setItemInput] = useState("");
    const dispatch = useDispatch();

    const onItemChange = (event) => {
        setItemInput(event.target.value);
    };

    const addItem = async () => {
        if (isValidInput()) {
            await todoApi.addTodoTask({
                id: Date.now().toString(),
                text: itemInput,
                done: false,
            });
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoTask(response.data));
            setItemInput("");
        } else {
            alert("Invalid Input! please enter something.");
        }
    };

    const isValidInput = () => {
        return itemInput.trim() !== "";
    };

    return (
        <div>
            <input
                type="text"
                value={itemInput}
                onChange={onItemChange}
                className="item-input"
                placeholder="What are you going to do today?"
                id="itemInput"
            />
            <button onClick={addItem} className="add-button">
                Add Task
            </button>
        </div>
    );
};

export default TodoGenerator;
