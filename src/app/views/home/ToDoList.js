import React, { useEffect, useState } from 'react'

const ToDoList = (props) => {
    const [addData, handleChange] = useState('')
    const [todo, setTodo] = useState([])
    const [todoObj, setObj] = useState([])

    useEffect(() => {
        setTodo(JSON.parse(localStorage.getItem('listData')) || [])
    }, [])
    useEffect(() => {
        localStorage.setItem('listData', JSON.stringify(todo))
        console.log('todo', todo)
    }, [todo])
    useEffect(() => {
        console.log('todoObj', todoObj)
    }, [todoObj])

    return (
        <div className="p-4">
            <div className="d-flex">
                <input
                    value={addData}
                    type="text "
                    className="border rounded pl-2"
                    placeholder="輸入代辦事項"
                    onChange={(e) => handleChange(e.target.value)}
                />

                <button
                    className="btn rounded"
                    onClick={() => {
                        const todoProxy = { ...todoObj }
                        todoProxy.content = addData
                        todoProxy.isCompleted = false
                        setObj(todoProxy)
                        setTodo((arr) => {
                            return [...arr, todoProxy]
                        })

                        handleChange('')
                    }}
                    disabled={!addData}
                >
                    新增
                </button>
            </div>
            <div className="d-flex my-1">待辦事項</div>
            <div className="border mb-2"></div>

            <ul>
                {todo.map((item, i) => (
                    <li key={i} className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                className="hide-switch"
                                onChange={(e) => {
                                    const id = e.target.value
                                    const idTodo = [...todo]
                                    console.log('idTodo[id]', idTodo[id])
                                    idTodo[id].isCompleted = !idTodo[id].isCompleted
                                    setTodo(idTodo)
                                }}
                                checked={item.isCompleted}
                                value={i}
                            />
                            <label className="btn btn-select border-0">{item.content}</label>
                        </div>
                        <button
                            key={i}
                            className="btn rounded"
                            onClick={() => {
                                // const todoProxy = [...todo]
                                // todoProxy.splice(i, 1)
                                setTodo((arr) => [...arr.slice(0, i), ...arr.slice(i + 1)])
                            }}
                        >
                            刪除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default React.memo(ToDoList)
