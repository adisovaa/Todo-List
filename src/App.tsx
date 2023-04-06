import React, {useState} from 'react';
import {TodoList} from "./TodoList";

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: true}
    ])

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter((el) => el.id !== taskId))
        // tasks = tasks.filter(el => el.id !== taskId)
        // setTasks(taskId)
    }

    return (
        <div className="App">
            <TodoList
                tasks={tasks}
                truckName={'hello'}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;