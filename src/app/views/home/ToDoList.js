import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoContent from './TodoContent'

const ToDoList = (props) => {
    const [addData, handleChange] = useState('')
    const [todo, setTodo] = useState([])

    useEffect(() => {
        setTodo(JSON.parse(localStorage.getItem('listData')) || [])
    }, [])
    useEffect(() => {
        localStorage.setItem('listData', JSON.stringify(todo))
        console.log('todo', todo)
    }, [todo])

    return (
        <div className="p-4">
            <TodoInput
                addData={addData}
                onChangeHandle={(e) => {
                    handleChange(e.target.value)
                }}
                onClickHandle={() => {
                    setTodo((arr) => {
                        return [...arr, { content: addData, isCompleted: false }]
                    })
                    handleChange('')
                }}
            />
            <TodoContent
                todo={todo}
                onChangeInput={(e) => {
                    const idItem = e.target.value
                    const idTodo = [...todo]
                    console.log('idTodo[id]', idTodo[idItem])
                    idTodo[idItem].isCompleted = !idTodo[idItem].isCompleted
                    setTodo(idTodo)
                }}
                onClickBtn={(index) => {
                    // const todoProxy = [...todo]
                    // todoProxy.splice(i, 1)
                    setTodo((arr) => [...arr.slice(0, index), ...arr.slice(index + 1)])
                }}
            />
        </div>
    )
}
export default React.memo(ToDoList)
