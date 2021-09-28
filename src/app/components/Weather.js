import React from 'react'
import Wtsvg from 'components/Wtsvg'
function Weather(props) {
    const wtDiv = `bg-secondary py-2 trs-x-100 wt-div `
    const wtHide = `bg-secondary py-2 wt-hide  `

    return (
        <div>
            <div className={props.name ? wtHide : wtDiv}>
                <i className="justify-content-start p-4 icon icon-arrow-left" onClick={props.onClose}></i>
                <div className="align-items-center">
                    <div className="text-center px-2 py-1 fz-32px">{props.value.location}</div>
                    <Wtsvg value={props.value.svg} />
                    <div className="text-center px-2 py-1 fz-56px">{props.value.avgT}°C</div>
                    <div className="text-center px-2 py-1">最低溫度：{props.value.minT}°C</div>
                    <div className="text-center px-2 py-1">最高溫度：{props.value.maxT}°C</div>
                    <div className=" px-2 py-1 mx-2 text-justify">{props.value.description}</div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Weather)
