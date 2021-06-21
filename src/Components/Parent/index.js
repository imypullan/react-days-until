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
                                    daysUntil: 0,
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
        if(t.dates == undefined) {
            console.log('bye')
            return
        }
        t.dates.forEach(date => {
            console.log(date.name)
            console.log(date)
            this.checkDateIsFuture(date)
            if(date.daysUntil === 0) {
                this.calculateDaysUntil(date)
            }
            console.log(date.daysUntil)
            this.prepareDatesRecursive(date)
        })
        return console.log('boi')
    }



    // prepareDates = () => {
    //     // this.checkDateIsFuture()
    //     // this.calculateDaysUntil()
    //     // this.setState({
    //     //     showInfo: true
    //     // })
    // }





    checkDateIsFuture = (date) => {
        if(date.numericDate < this.state.today) {
            return date.numericDate.setFullYear((this.state.thisYear + 1))
        }
        return date.numericDate
    }

    calculateDaysUntil = (date) => {
        const msInDay = 1000 * 60 * 60 *24
        return date.daysUntil = Math.round((date.numericDate.getTime() - this.state.today.getTime())/msInDay)
    }

    render() {
        return (
            <div className="container">
                <Sidebar dates={this.state.dates} />
                <Display dates={this.state.dates} showInfo={this.state.showInfo} handleClick={this.prepareDatesRecursive}/>
                <button onClick={() => this.prepareDatesRecursive(this.state.dates[0])}>button</button>
            </div>
        )
    }
}

export default Parent