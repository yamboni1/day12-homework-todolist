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
            <input type="text" onChange={onItemChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
};

export default TodoGenerator;
