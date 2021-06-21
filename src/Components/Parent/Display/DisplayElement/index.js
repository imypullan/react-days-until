import React from 'react'
class DisplayElement extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dates: this.props.dates,
            showInfo: this.props.showInfo,
            datesToLookForwardTo: []
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.showInfo !== prevProps.showInfo) {
            this.setState({
                dates: this.props.dates,
                showInfo: this.props.showInfo,
                datesToLookForwardTo: this.props.dates[0].dates[0].dates
            })
        }
    }



    render() {
        return (
            <div style={{display: this.state.showInfo? "block": "none"}}>
                <ul>
                    {console.log(this.state.datesToLookForwardTo)}
                    {this.state.datesToLookForwardTo.map(date=> {
                        return (
                            <li key={date.name}>
                                {date.daysuntil} days until {date.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default DisplayElement