import React from 'react'
import Wtsvg from 'components/Wtsvg'
function Weather({ value, name, onClose }) {
    const wtDiv = `bg-secondary py-2 text-center trs-x-100 wt-div `
    const wtHide = `bg-secondary py-2 text-center wt-hide `
    const { location, svg, avgT, minT, maxT, description } = value

    return (
        <div>
            <div className={name ? wtHide : wtDiv}>
                <i className="justify-content-start p-4 icon icon-arrow-left" onClick={onClose}></i>
                <div className="text-center px-2 py-1 fz-32px">{location}</div>
                <Wtsvg value={svg} />
                <div className=" px-2 py-1 fz-56px">{avgT}°C</div>
                <div className=" px-2 py-1">最低溫度：{minT}°C</div>
                <div className=" px-2 py-1">最高溫度：{maxT}°C</div>
                <div className=" px-2 py-1 mx-2 ">{description}</div>
            </div>
        </div>
    )
}
export default React.memo(Weather)
