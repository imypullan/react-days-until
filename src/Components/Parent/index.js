import React from 'react'
import TextElement from "./TextElement"
import DisplayElement from "./DisplayElement"
import ButtonElement from "./ButtonElement"

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            today: new Date(),
            thisYear: new Date().getFullYear(),
            dates: [],
            showInfo: false
        }
    }
    componentDidMount() {
        this.setDates()
    }

    setDates = () => {
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
    }

    prepareDates = () => {
        this.checkDateIsFuture()
        this.calculateDaysUntil()
        this.setState({
            showInfo: true
        })
    }

    checkDateIsFuture = () => {
        this.state.dates.map(date => (
            date.numericDate < this.state.today? date.numericDate.setFullYear((this.state.thisYear + 1)) : date.numericDate
        ))
    }

    calculateDaysUntil = () => {
        const msInDay = 1000 * 60 * 60 *24
        this.state.dates.map(date => (
           date.daysUntil = Math.round((date.numericDate.getTime() - this.state.today.getTime())/msInDay)
        ))
    }

    render() {
        return (
            <div>
                <TextElement />
                <DisplayElement dates={this.state.dates} showInfo={this.state.showInfo}/>
                <ButtonElement handleClick={this.prepareDates} />
            </div>
        )
    }
}

export default Parent