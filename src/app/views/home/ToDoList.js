import { data } from 'flickity'
import React, { useEffect, useState } from 'react'

const ToDoList = (props) => {
    const [addData, handleChange] = useState(null)
    const [todo, setTodo] = useState([])

    const setLocalStorage = () => {
        localStorage.setItem('list-data', JSON.stringify(todo))
    }
    useEffect(() => {
        console.log(todo)
    }, [todo])
    return (
        <div className="p-4">
            <div className="d-flex">
                <input
                    type="text "
                    className="border rounded pl-2"
                    placeholder="輸入代辦事項"
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button
                    className=" btn rounded"
                    onClick={() => {
                        // const todoProxy = [...todo, addData]
                        // todoProxy.push(addData)
                        // setTodo(todoProxy)
                        setTodo((arr) => {
                            return [...arr, addData]
                        })
                        setLocalStorage()
                    }}
                >
                    新增
                </button>
            </div>
            <div className="d-flex my-1">待辦事項</div>
            <div className="border mb-2"></div>
            <ul>
                {todo.map((item, i) => (
                    <li key={i} className="d-flex justify-content-between mb-2">
                        {item}
                        <button
                            key={i}
                            className="btn"
                            onClick={() => {
                                const todoProxy = [...todo]
                                todoProxy.splice(i, 1)

                                setTodo(todoProxy)
                                setLocalStorage()
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
