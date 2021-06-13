import React, {useState} from 'react'
import TextElement from "./TextElement"
import DisplayElement from "./DisplayElement"
import ButtonElement from "./ButtonElement"

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            today: new Date(),
            thisYear: new Date().getFullYear(),
            dates: []
        }
    }

    componentDidMount() {
        this.setState({
            dates: [
                {
                    name: "Christmas",
                    numericDate: new Date(this.state.thisYear, 11, 25),
                    daysUntil: 0
                },
                {
                    name: "New Year's Day",
                    numericDate: new Date(this.state.thisYear, 12, 1),
                    daysUntil: 0
                },
                {
                    name: "Valentine's Day",
                    numericDate: new Date(this.state.thisYear, 1, 14),
                    daysUntil: 0
                }
            ]
        })
        // const msInDay = 1000 * 60 * 60 *24
        // console.log(this.state.dates)
        // this.state.dates.map(date =>(
        //     date.numericDate < this.state.thisYear? date.numericDate.setFullYear((this.state.thisYear + 1)) : date.numericDate
        // ))
        // console.log(this.state.dates)
    }



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