import React from 'react'
function Wtsvg(props) {
    const wtSvg = `icon fz-100px fz-sm-64px  text-center  py-1 px-2 wt-${props.value}`
    return <i className={wtSvg}></i>
}
export default React.memo(Wtsvg)
