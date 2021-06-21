import React from 'react'
import Sidebar from "./Sidebar";
import Display from "./Display";

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
                    name: "Days until",
                    label: "Days until",
                    dates: [
                        {
                            name: "Dates to look forward to",
                            label: "Dates to look forward to",
                            dates: [
                                {
                                    name: "Christmas Day",
                                    label: "Christmas Day",
                                    numericDate: new Date(this.state.thisYear, 11, 25),
                                    daysUntil: 0
                                },
                                {
                                    name: "New Year's Day",
                                    label: "New Year's Day",
                                    numericDate: new Date(this.state.thisYear, 12, 1),
                                    daysUntil: 0
                                },
                                {
                                    name: "Valentine's Day",
                                    label: "Valentines Day",
                                    numericDate: new Date(this.state.thisYear, 1, 14),
                                    daysUntil: 0
                                }
                            ]
                        },
                        {
                            name: "UK 2022 Bank Holidays",
                            label: "UK 2022 Bank Holidays",
                            dates: [
                                {
                                    name: "August Bank Holiday",
                                    label: "August Bank Holiday",
                                    numericDate: new Date(this.state.thisYear, 7, 29),
                                    daysUntil: 0
                                },
                                {
                                    name: "Christmas Day bank holiday",
                                    label: "Christmas Day Bank Holiday",
                                    numericDate: new Date(this.state.thisYear, 11, 25),
                                    daysUntil: 0
                                },
                                {
                                    name: "Boxing Day",
                                    label: "Boxing Day Bank Holiday",
                                    numericDate: new Date(this.state.thisYear, 11, 26),
                                    daysUntil: 0
                                }
                            ]
                        }

                    ]
                },
            ]
        })
    }

    prepareDates = () => {
        // this.checkDateIsFuture()
        // this.calculateDaysUntil()
        // this.setState({
        //     showInfo: true
        // })
        console.log('hello')
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
            <div className="container">
                <Sidebar dates={this.state.dates} />
                <Display dates={this.state.dates} showInfo={this.state.showInfo} prepareDates={this.prepareDates}/>
            </div>
        )
    }
}

export default Parent