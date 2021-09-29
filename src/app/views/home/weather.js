import React, { useState, useEffect } from 'react'
import { set } from 'react-ga'
import Weather from '../../components/Weather'

const HomePage = (props) => {
    const [data, setData] = useState([])
    const [city, setCity] = useState({})
    const [isActive, setActive] = useState(false)

    useEffect(() => {
        fetch('static-api/forecast.json')
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                setData(data)
            })
            .catch(console.error)
    }, [])
    return (
        <div>
            <ul className="p-4">
                {data.map((item, i) => (
                    <li className="mb-2" key={i}>
                        <button
                            className="btn justify-content-between w-100 h-6 px-2 rounded "
                            onClick={() => {
                                const countData = data[i]
                                setCity({
                                    location: countData.location,
                                    avgT: countData.T.elementValue.value,
                                    minT: countData.MinT.elementValue.value,
                                    maxT: countData.MaxT.elementValue.value,
                                    svg: countData.Wx.elementValue[1].value,
                                    description: countData.WeatherDescription.elementValue.value,
                                })
                                setActive(true)
                            }}
                        >
                            {item.location}
                            <i className="icon icon-arrow-right fz-13px" aria-hidden="true"></i>
                        </button>
                    </li>
                ))}
            </ul>
            <Weather
                value={city}
                isActive={isActive}
                onClose={() => {
                    setActive(false)
                }}
            ></Weather>
        </div>
    )
}
export default React.memo(HomePage)
