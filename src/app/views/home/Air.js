import React, { useState, useEffect } from 'react'
import AirContent from './AirContent'
import Spinner from 'components/Spinner'
const Air = (props) => {
    const [data, setData] = useState(null)
    const [currentData, setCurrentData] = useState(null)
    const [isActive, setActive] = useState(false)

    useEffect(() => {
        fetch('static-api/aqi.json')
            .then((resp) => resp.json())
            .then(({ data }) => {
                setData(data)
            })
            .catch(console.error)
    }, [])
    // if (!data) {
    //     return <Spinner />
    // }
    return (
        <>
            {!data && <Spinner />}
            {data && (
                <div className="p-4">
                    <h1 className="mb-2 text-center">提供各測站之空氣品質指標（AQI）</h1>
                    <ul>
                        {data.map((item, i) => (
                            <li className="mb-2" key={i}>
                                <button
                                    className="btn  px-2 border rounded text-center justify-content-between w-100 h-6"
                                    onClick={() => {
                                        setCurrentData(data[i])
                                        setActive(true)
                                    }}
                                >
                                    {item.SiteName}
                                    <i className="icon icon-arrow-right fz-13px" aria-hidden="true"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div
                className={`${
                    isActive ? '' : 'translate-x-100'
                } d-flex flex-column fixed-top w-100 h-100 scroll-blk trs-all bg-white`}
            >
                <div className="d-flex flex-shrink-0 bg-light position-relative">
                    <button className="btn w-6 h-6 border-0 position-relative z-100" onClick={() => setActive(false)}>
                        <i className="icon icon-arrow-left" aria-hidden="true"></i>
                        <span className="sr-only">返回</span>
                    </button>
                    <div className="d-flex justify-content-center align-items-center fill-parent font-weight-bold fz-20px">
                        {currentData?.SiteName}監測站
                    </div>
                </div>
                <div className="flex-fill scroll-blk">
                    <AirContent data={currentData} onClick={() => setActive(false)} />
                </div>
            </div>
        </>
    )
}
export default React.memo(Air)
