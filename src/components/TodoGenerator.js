import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "./todoListSlice";

const TodoGenerator = () => {
    const [itemInput, setItemInput] = useState("");

    const onItemChange = (event) => {
        setItemInput(event.target.value);
    };

    const dispatch = useDispatch();

    const addItem = () => {
        if (isValidInput|| itemInput.trim() == null) {
            alert("Invalid input! please add text");
        } else {
            dispatch(
                addTodoItem({
                    id: Date.now(),
                    text: itemInput,
                    done: false,
                })
            );
            setItemInput("");
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
                placeholder="What are your todos for today?"
            />
            <button onClick={addItem} className="add-button">
                Add Todo
            </button>
        </div>
    );
};

export default TodoGenerator;
