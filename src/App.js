import "./App.css";
import TodoGroup from "./components/TodoGroup";

function App() {
    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoGroup todoItems={["First", "Second"]} />
        </div>
    );
}

export default App;
