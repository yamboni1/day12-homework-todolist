import { useState } from "react";
import { useTodos } from "../hooks/useTodos";


const TodoGenerator = () => {
    const [itemInput, setItemInput] = useState("");
    const {addItem} = useTodos();
    const onItemChange = (event) => {
        setItemInput(event.target.value);
    };

    const handleAddItem = async () => {
        if (isValidInput()) {
            addItem({
                id: Date.now().toString(),
                text: itemInput,
                done: false
            })
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
            <button type="primary" onClick={handleAddItem} className="add-button">
                Add Task
            </button>
        </div>
    );
};

export default TodoGenerator;
