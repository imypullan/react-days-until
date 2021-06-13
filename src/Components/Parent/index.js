import React, {useState} from 'react'
import TextElement from "./TextElement"
import DisplayElement from "./DisplayElement"
import ButtonElement from "./ButtonElement"

class Parent extends React.Component {


    render() {
        return (
            <div>
                <TextElement />
                <DisplayElement />
                <ButtonElement />
            </div>
        )
    }
}

export default Parent