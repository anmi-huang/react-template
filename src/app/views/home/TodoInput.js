import React from 'react'
import TodoContent from './TodoContent'
function TodoInput({ addData, onChangeHandle, onClickHandle }) {
    return (
        <div className="p-4">
            <div className="d-flex">
                <input
                    value={addData}
                    type="text "
                    className="border rounded pl-2"
                    placeholder="輸入代辦事項"
                    onChange={onChangeHandle}
                />
                <button className="btn rounded" onClick={onClickHandle} disabled={!addData}>
                    新增
                </button>
            </div>
            <div className="d-flex my-1">待辦事項</div>
            <div className="border mb-2"></div>
        </div>
    )
}
export default React.memo(TodoInput)
