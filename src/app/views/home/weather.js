import React, { useState, useEffect } from 'react'
import { set } from 'react-ga'
import Weather from '../../components/Weather'
// import EXweather from '../../components/EXweather'

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

    const toggleClass = () => {
        setActive(!isActive)
    }

    return (
        <div>
            <ul className="justify-content-center align-items-center my-2  p-4 ">
                {data.map((item, i) => (
                    <li
                        key={i}
                        value={i}
                        className="form-select py-1 px-4 border rounded text-center my-2"
                        onClick={() => {
                            const countData = data[i]
                            setCity({
                                location: data[i].location,
                                avgT: countData.T.elementValue.value,
                                minT: countData.MinT.elementValue.value,
                                maxT: countData.MaxT.elementValue.value,
                                svg: countData.Wx.elementValue[1].value,
                                description: countData.WeatherDescription.elementValue.value,
                            })
                            toggleClass()
                        }}
                    >
                        {item.location}
                    </li>
                ))}
            </ul>
            <Weather value={city} name={isActive} onClose={toggleClass}></Weather>
        </div>
    )
}
export default React.memo(HomePage)
