import React from 'react'
import Wtsvg from 'components/Wtsvg'
/* function Weather(props) {
    return (
        <div>
            <div className="px-2 py-1 fz-32px">{props.value.location}</div>
            <Wtsvg value={props.value.svg} />
            <div className="text-center px-2 py-1 fz-56px">{props.value.avgT}°C</div>
            <div className="text-center px-2 py-1">最低溫度：{props.value.minT}°C</div>
            <div className="text-center px-2 ">最高溫度：{props.value.maxT}°C</div>
        </div>
    )
} */
const Weather = ({value}/*props*/) => {
	const {location, svg, avgT, minT, maxT} = value
    
	return (
        <div>
            <div className="px-2 py-1 fz-32px">{location}</div>
            <Wtsvg value={svg} />
            <div className="text-center px-2 py-1 fz-56px">{avgT}°C</div>
            <div className="text-center px-2 py-1">最低溫度：{minT}°C</div>
            <div className="text-center px-2 ">最高溫度：{maxT}°C</div>
        </div>
    )
}
export default React.memo(Weather)
