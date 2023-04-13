import React, {useState} from 'react';
import {PropsType, TodoList} from "./TodoList";
import {v1} from 'uuid'

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'React', isDone: true},
        {id: v1(), title: 'Rest API', isDone: false}
    ])

    const addTask = (newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((el) => el.id !== taskId))
    }


    let [filter, setFilter] = useState<FilterValuesType>('all')

    let tasksForToDoList = tasks

    if (filter === 'active') {
        tasksForToDoList = tasks.filter(el => !el.isDone)
    }
    if (filter === 'completed') {
        tasksForToDoList = tasks.filter(el => el.isDone)
    }
    if (filter === 'all') {
        tasksForToDoList = tasks
    }

    const changeFilter = (value: string) => {
        // @ts-ignore
        setFilter(value)
    }

    return (
        <div className="App">
            <TodoList
                title={'hello'}
                tasks={tasksForToDoList}
                removeTask={removeTask}
                addTask={addTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;