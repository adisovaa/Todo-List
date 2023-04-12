import React, {ChangeEvent, useState} from 'react';
import {Button} from "./components/Button";

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
    const [newTitle, setNewTitle] = useState('')

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

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    // @ts-ignore
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const removeTaskHandler = (el:string) => {
        props.removeTask(el)
    }

    // const AllChangeFilterHandler = () => {
    //     filterTask('all')
    // }
    //
    // const ActiveChangeFilterHandler = () => {
    //     filterTask('Active')
    // }
    //
    // const CompleteChangeFilterHandler = () => {
    //     filterTask('Complete')
    // }


    const filterFunction = (filterValue: string) => {
        filterTask(filterValue)
    }

    return (
        <div>
            <h3>{props.truckName}</h3>
            <div>
                <input onKeyPress={onKeyPressHandler}
                       type='text'
                       value={newTitle}
                       onChange={onChangeHandler}
                />
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {filteredTasks.map((el) => {
                    // const removeTaskHandler = () => {
                    //     props.removeTask(el.id)
                    // }
                    return (
                        <li key={el.id}>
                            <button onClick={() => removeTaskHandler(el.id)}>x</button>
                            <input type='checkbox' checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button name={'All'} callBack={() => filterFunction('All')}/>
                <Button name={'Active'} callBack={() => filterFunction('Active')}/>
                <Button name={'Complete'} callBack={() => filterFunction('Complete')}/>

                {/*<button onClick={() => filterFunction('All')}>All</button>*/}
                {/*<button onClick={() => filterFunction('Active')}>Active</button>*/}
                {/*<button onClick={() => filterFunction('Complete')}>Complete</button>*/}
            </div>
        </div>
    )
}
