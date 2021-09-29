import React, { useState, useEffect } from 'react'
import Content from './Content'

const List = (props) => {
    const [data, setData] = useState([])
    const [currentData, setCurrentData] = useState(null)
    const [isContentShow, toggleContent] = useState(false)

    useEffect(() => {
        fetch('static-api/forecast.json')
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                setData(data)
            })
            .catch(console.error)
    }, [])

    return (
        <>
            <div className="p-2">
                <ul>
                    {data.map((city, i) => (
                        <li className="mb-2" key={i}>
                            <button
                                className="btn justify-content-between w-100 h-6 px-2 rounded"
                                onClick={() => {
                                    setCurrentData(data[i])
                                    toggleContent(true)
                                }}
                            >
                                {city.location}
                                <i className="icon icon-arrow-right fz-13px" aria-hidden="true"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {data && (
                <div
                    className={`${
                        isContentShow ? '' : 'translate-x-100'
                    } d-flex flex-column fixed-top w-100 h-100 scroll-blk trs-all bg-white`}
                >
                    <div className="d-flex flex-shrink-0 bg-light position-relative">
                        <button
                            className="btn w-6 h-6 border-0 position-relative z-100"
                            onClick={() => toggleContent(false)}
                        >
                            <i className="icon icon-arrow-left" aria-hidden="true"></i>
                            <span className="sr-only">返回</span>
                        </button>
                        <div className="d-flex justify-content-center align-items-center fill-parent font-weight-bold fz-20px">
                            {currentData?.location}
                        </div>
                    </div>
                    <div className="flex-fill scroll-blk">
                        <Content data={currentData} onClick={() => toggleContent(false)} />
                    </div>
                </div>
            )}
        </>
    )
}
export default React.memo(List)
