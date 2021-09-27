import React, { useState, useEffect } from 'react'
import { set } from 'react-ga'
// import Welcome from 'components/Welcome'
// import Wtsvg from 'components/Wtsvg'
import Weather from '../../components/Weather'

const HomePage = (props) => {
    const [data, setData] = useState([])
    const [count, setCountData] = useState(0)
    const [city, setCity] = useState({})

    useEffect(() => {
        fetch('static-api/forecast.json')
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                setData(data)
            })
            .catch(console.error)
    }, [])

    return (
        <div className="p-4 position-relative">
            <div className="justify-content-center align-items-center my-2 ">
                {data.map((item, i) => (
                    <option
                        key={i}
                        value={i}
                        className="form-select py-1 px-4 border rounded text-center my-2"
                        onClick={(e) => {
                            const id = e.target.value
                            setCountData(id)
                            setCity({
                                location: data[id].location,
                                avgT: data?.[count]?.T.elementValue.value,
                                minT: data?.[count]?.MinT.elementValue.value,
                                maxT: data?.[count]?.MaxT.elementValue.value,
                                svg: data?.[count]?.Wx.elementValue[1].value,
                            })
                        }}
                    >
                        {item.location}
                    </option>
                ))}
            </div>
            <Weather value={city} className="position-absolute wt-position" />
        </div>
    )
}
export default React.memo(HomePage)
