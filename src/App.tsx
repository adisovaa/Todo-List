import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {v1} from 'uuid'

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'React', isDone: true},
        {id: v1(), title: 'Rest API', isDone: false}
    ])

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((el) => el.id !== taskId))
    }

    const addTask = (newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }

    return (
        <div className="App">
            <TodoList
                tasks={tasks}
                truckName={'hello'}
                removeTask={removeTask}
                addTask={addTask}
            />
        </div>
    );
}

export default App;