import React from 'react'
import Sidebar from "./Sidebar";
import Display from "./Display";

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            today: new Date(),
            thisYear: new Date().getFullYear(),
            nextYear: ((new Date().getFullYear()) +1),
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
                                    numericdate: new Date(this.state.thisYear, 11, 25),
                                    daysuntil: 0,
                                },
                                {
                                    name: "New Year's Day",
                                    label: "New Year's Day",
                                    numericdate: new Date(this.state.thisYear, 12, 1),
                                    daysuntil: 0
                                },
                                {
                                    name: "Valentine's Day",
                                    label: "Valentine's Day",
                                    numericdate: new Date(this.state.thisYear, 1, 14),
                                    daysuntil: 0
                                }
                            ]
                        },
                        {
                            name: "UK 2022 Bank Holidays",
                            label: "UK 2022 Bank Holidays",
                            dates: [
                                {
                                    name: "New Year's Day",
                                    label: "New Year's Day",
                                    numericdate: new Date(this.state.nextYear, 0, 1),
                                    daysuntil: 0
                                },
                                {
                                    name: "Good Friday",
                                    label: "Good Friday",
                                    numericdate: new Date(this.state.nextYear, 3, 15),
                                    daysuntil: 0
                                },
                                {
                                    name: "Easter Monday",
                                    label: "Easter Monday",
                                    numericdate: new Date(this.state.nextYear, 3, 18),
                                    daysuntil: 0
                                },
                                {
                                    name: "May Bank Holiday",
                                    label: "May Bank Holiday",
                                    numericdate: new Date(this.state.nextYear, 4, 2),
                                    daysuntil: 0
                                },
                                {
                                    name: "Spring Bank Holiday",
                                    label: "Spring Bank Holiday",
                                    numericdate: new Date(this.state.nextYear, 5, 2),
                                    daysuntil: 0
                                },
                                {
                                    name: "Platinum Jubilee Bank Holiday",
                                    label: "Platinum Jublilee Bank Holiday",
                                    numericdate: new Date(this.state.nextYear, 5, 3),
                                    daysuntil: 0
                                },
                                {
                                    name: "August Bank Holiday",
                                    label: "August Bank Holiday",
                                    numericdate: new Date(this.state.nextYear, 7, 29),
                                    daysuntil: 0
                                },
                                {
                                    name: "Boxing Day",
                                    label: "Boxing Day Bank Holiday",
                                    numericdate: new Date(this.state.nextYear, 11, 26),
                                    daysuntil: 0
                                },
                                {
                                    name: "Christmas Day Bank Holiday",
                                    label: "Christmas Day Bank Holiday",
                                    numericdate: new Date(this.state.nextYear, 11, 27),
                                    daysuntil: 0
                                }
                            ]
                        }

                    ]
                },
            ]
        })
    }

    prepareDatesRecursive(t) {
        if(t.dates === undefined) {
            return
        }
        t.dates.forEach(date => {
            this.checkDateIsFuture(date)
            if(date.daysuntil === 0) {
                this.calculateDaysUntil(date)
            }
            this.prepareDatesRecursive(date)
        })
        this.setState({
            showInfo: true
        })
    }

    checkDateIsFuture = (date) => {
        if(date.numericdate < this.state.today) {
            return date.numericdate.setFullYear((this.state.thisYear + 1))
        }
        return date.numericdate
    }

    calculateDaysUntil = (date) => {
        const msInDay = 1000 * 60 * 60 *24
        return date.daysuntil = Math.round((date.numericdate.getTime() - this.state.today.getTime())/msInDay)
    }

    render() {
        return (
            <div className="container">
                <Sidebar dates={this.state.dates} />
                <Display dates={this.state.dates} showInfo={this.state.showInfo} handleClick={() => this.prepareDatesRecursive(this.state.dates[0])}/>
            </div>
        )
    }
}

export default Parent