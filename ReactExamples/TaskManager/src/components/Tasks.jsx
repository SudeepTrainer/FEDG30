import { useState } from "react";
import "./tasks.css"
function Tasks() {
    let [tasks, setTasks] = useState([]);
    let tasksDisplay = tasks.map(item => <h2>{item}</h2>);
    function handleClick() {
        let newTask = `Task ${tasks.length + 1}`;
        setTasks((oldTasks) => {
            return [...oldTasks, newTask]
        })
        console.log(tasks);
    }
    return (
        <div>
            <button onClick={handleClick}>Add Task</button>
            {tasksDisplay}
        </div>
    )
}
export default Tasks;