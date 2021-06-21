import React, {useState} from 'react'

const ButtonElement = (props) => {

    return (
        <div>
            <button onClick={props.handleClick}>Show days until</button>
        </div>
    )
}

export default ButtonElement