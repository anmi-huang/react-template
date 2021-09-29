import React, { useState } from 'react'

const Content = ({ data }) => {
    if (!data) return null

    const { location, T, MaxT, MinT, WeatherDescription, Wx, RH, WD, Td, MinAT, MinCI } = data

    const displayArr = [WeatherDescription, T, MaxT, MinT, RH, WD, Td, MinAT, MinCI]

    return (
        <div className="p-2">
            <div className="d-flex justify-content-center align-items-center mb-3 text-secondary">
                <i className={`icon icon-weather mr-3 wt-${Wx.elementValue[1].value} fz-100px`} aria-hidden="true"></i>
                <div className="fz-24px">{Wx.elementValue[0].value}</div>
            </div>
            {displayArr.map((prop, i) => (
                <div className="d-flex flex-wrap mb-1" key={i}>
                    <div className="mb-4px mr-1 font-weight-bold">{prop.desc}：</div>
                    <div>
                        {prop.elementValue.value} {prop.elementValue.measures !== 'NA' && prop.elementValue.measures}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default React.memo(Content)
