import React from 'react'

const Fahrenheit = (props)=> {
    return(
        <div>Fahrenheit:{props.derece * 1.8+32}</div>
    )
}

export default Fahrenheit