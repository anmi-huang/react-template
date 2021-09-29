import React, { useState } from 'react'

const AirContent = ({ data }) => {
    if (!data) return null

    const { County, AQI, Status, WindSpeed, WindDirec, PublishTime, Pollutant } = data
    // const airArr = [County, WindSpeed, WindDirec, PublishTime]

    return (
        <div className="p-2 ">
            <div className=" border mx-4  ">
                <div className="d-flex justify-content-center align-items-center my-2  text-secondary fz-40px">
                    {AQI}
                </div>
                <div className="d-flex justify-content-center align-items-center mb-2 text-secondary">
                    ＡＱＩ：{Status}
                </div>
            </div>
            <div className=" mx-4 my-2">
                <div className="d-flex justify-content-between mb-2">
                    <div>所在縣市：</div>
                    <div>{County}</div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <div>風速：</div>
                    <div>{WindSpeed}(m/sec)</div>
                </div>

                <div className="d-flex justify-content-between mb-2">
                    <div>風向：</div>
                    <div>{WindDirec}(degrees)</div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <div>空氣污染指標物：</div>
                    <div>{Pollutant == '' ? '無' : Pollutant}</div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <div>建置時間：</div>
                    <div>{PublishTime}</div>
                </div>
            </div>

            {/* {airArr.map((prop, i) => (
                <div className="d-flex flex-wrap my-1 border mx-4 border-secondary " key={i}>
                    <div className="mb-4px font-weight-bold">{prop}</div>
                </div>
            ))} */}
        </div>
    )
}

export default React.memo(AirContent)
