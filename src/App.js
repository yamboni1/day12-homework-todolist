import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoItem />
        </div>
    );
}

export default App;
