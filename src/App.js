import "./App.css";
import TodoGenerator from "./components/TodoGenerator";
import TodoGroup from "./components/TodoGroup";

function App() {
    return (
        <div className="App">
            <h1>Todo List</h1>
            <TodoGroup todoItems={["First", "Second"]} />
            <TodoGenerator/>
        </div>
    );
}

export default App;
