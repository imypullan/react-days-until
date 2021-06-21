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
                                    label: "Valentines Day",
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
                                    name: "August Bank Holiday",
                                    label: "August Bank Holiday",
                                    numericdate: new Date(this.state.thisYear, 7, 29),
                                    daysuntil: 0
                                },
                                {
                                    name: "Christmas Day bank holiday",
                                    label: "Christmas Day Bank Holiday",
                                    numericdate: new Date(this.state.thisYear, 11, 25),
                                    daysuntil: 0
                                },
                                {
                                    name: "Boxing Day",
                                    label: "Boxing Day Bank Holiday",
                                    numericdate: new Date(this.state.thisYear, 11, 26),
                                    daysuntil: 0
                                }
                            ]
                        }

                    ]
                },
            ]
        })
    }

    prepareDates = () => {
        let dates = this.state.dates
        if (dates.children.length === 0) {
            return
        }
        dates.children.forEach(date => {
            console.log(date.name)
            this.prepareDatesRecursive(date)
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
            console.log(date)
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