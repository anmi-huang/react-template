import React from 'react'
function TodoContent({ todo, onChangeInput, onClickBtn }) {
    return (
        <ul>
            {todo.map((item, i) => (
                <li key={i} className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="hide-switch"
                            onChange={onChangeInput}
                            checked={item.isCompleted}
                            value={i}
                            name={i}
                            id={i}
                        />
                        <label
                            htmlFor={i}
                            className={`${item.isCompleted ? 'checked-label' : ''} btn btn-select border-0`}
                        >
                            {item.content}
                        </label>
                    </div>
                    <button key={i} className="btn rounded" onClick={() => onClickBtn(i)}>
                        刪除
                    </button>
                </li>
            ))}
        </ul>
    )
}
export default React.memo(TodoContent)
