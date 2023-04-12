import React, {useState} from 'react';

export type TodoListPropsType = {
    tasks: Array<TaskType>
    truckName: string
    truck2?: string | number
    removeTask: (taskId: string) => void
    addTask: (newTitle: string) => void
}

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
    let [filterValue, setFilterValue] = useState('All')
    const[newTitle, setNewTitle] = useState('')

    const filterTask = (buttonName: string) => {
        setFilterValue(buttonName)
    }

    let filteredTasks = props.tasks
    if (filterValue === 'Active') {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }
    if (filterValue === 'Complete') {
        filteredTasks = props.tasks.filter(el => el.isDone)
    }
    if (filterValue === 'All') {
        filteredTasks = props.tasks
    }

    // const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setNewTitle(e.currentTarget.value)
    // }

    return (
        <div>
            <h3>{props.truckName}</h3>
            <div>
                <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.currentTarget.value)}/>
                <button onClick={() => props.addTask(newTitle)}>+</button>
            </div>
            <ul>
                {filteredTasks.map((el) => {
                    return (
                        <li key={el.id}>
                            <button onClick={(e) => props.removeTask(el.id)}>x</button>
                            <input type='checkbox' checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => filterTask('All')}>All</button>
                <button onClick={() => filterTask('Active')}>Active</button>
                <button onClick={() => filterTask('Complete')}>Complete</button>
            </div>
        </div>
    )
}
