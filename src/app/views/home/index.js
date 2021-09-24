import React, { useState, useEffect } from "react"
import { set } from "react-ga"
import Clock from "components/Clock"
import Welcome from "components/Welcome"


const HomePage = (props) => {
	const [data, setData] = useState([])
	const [count,setCountData] = useState(0)
	const [currentCityName, setCurrentCityName] = useState('')
	useEffect(() => {
		// const timer = setInterval(..)
		fetch('static-api/forecast.json')
			.then((resp) => resp.json())
			.then(({ success, data }) => {
				setData(data)
				setCurrentCityName(data[0].location)
			})
			.catch(console.error)
		// return ()=>{
		// 	clearInterval(timer)
		// }
	}, [])
	const wtSvg=`icon fz-40px fz-sm-64px  text-center  mt-sm-0  py-1 px-2 wt-${data?.[count]?.Wx.elementValue[1].value}`
	
	return (
		<div className="p-4">
			<div className="d-md-flex justify-content-center align-items-center my-2 mt-sm-0">
				<div className="d-flex justify-content-center align-items-center my-2 mt-sm-0">
					<select className="form-select p-1 border rounded text-center mx-2" onChange={(e) => {
						const id = e.target.value
						setCountData(id)
						setCurrentCityName(data[id].location)
						}}>
						{data.map((item, i) => <option key={i} value={i}>{item.location}</option>)}
					</select>
				</div>	
				<div className="d-sm-flex justify-content-center align-items-center my-2  mt-sm-0">
				<i  className={wtSvg}></i>		
					<div className="d-block">
						<div className="text-center fz-56px px-2  py-1">{data?.[count]?.T.elementValue.value} °C</div>
						<div className="text-center px-2 py-1">Min：{data?.[count]?.MinT.elementValue.value} °C / Max：{data?.[count]?.MaxT.elementValue.value} °C</div>
					</div>
				</div>
			</div>
			<Welcome name={currentCityName} value={data?.[count]?.T.elementValue.value}/>
			<Clock/>
		</div>
	)

	
}
export default React.memo(HomePage)
