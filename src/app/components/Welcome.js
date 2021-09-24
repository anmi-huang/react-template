import React from 'react'
function Welcome(props) {

    if (props.value>='20') {
        return (
            <h1 className="text-center">今天{props.name}的溫度適中！！</h1> 
        )
    } else if (props.value<='20') {
        return (
            <h1 className="text-center">今天{props.name}的溫度偏低！！</h1> 
        )
    } 
}
  export default React.memo(Welcome)

