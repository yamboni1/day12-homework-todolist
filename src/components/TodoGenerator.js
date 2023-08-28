import { useState } from "react";

const TodoGenerator = (props) => {
    const [item, setItem] = useState("");

    const onItemChange = (event) => {
        setItem(event.target.value);
    };

    const addItem = () => {
        props.onAddItem(item);
    };

    return (
        <div>
            <input type="text" onChange={onItemChange} className="item-input" />
            <button onClick={addItem} className="add-button">
                Add
            </button>
        </div>
    );
};

export default TodoGenerator;