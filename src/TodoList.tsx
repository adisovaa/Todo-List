import React, {ChangeEvent, useState} from 'react';
import {Button} from "./components/Button";
import {FilterValuesType} from "./App";

export type PropsType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (taskId: string) => void
    addTask: (newTitle: string) => void
    changeFilter: (value: string) => void
}

type TaskType = {
    id: string
    title: string
    isDone: boolean
}


export const TodoList = (props: PropsType) => {

    const [newTitle, setNewTitle] = useState('')

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

    const removeTaskHandler = (el: string) => {
        props.removeTask(el)
    }

    const filterFunction = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    onKeyPress={onKeyPressHandler}
                    type='text'
                    value={newTitle}
                    onChange={onChangeHandler}/>

                <Button name={'+'} callBack={addTaskHandler}/>
            </div>
            <ul>
                {props.tasks.map((el) => {
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
                <Button name={'All'} callBack={() => filterFunction('all')}/>
                <Button name={'Active'} callBack={() => filterFunction('active')}/>
                <Button name={'Complete'} callBack={() => filterFunction('completed')}/>
            </div>
        </div>
    )
}