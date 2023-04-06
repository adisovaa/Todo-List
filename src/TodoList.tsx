import React, {useState} from 'react';

export type TodoListPropsType = {
    tasks: Array<TaskType>
    truckName: string
    truck2?: string | number
    removeTask: (taskId: number) => void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const TodoList = (props: TodoListPropsType) => {
    let [filterValue, setFilterValue] = useState('All')
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

    return (
        <div>
            <h3>{props.truckName}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filteredTasks.map((el, i) => {
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
