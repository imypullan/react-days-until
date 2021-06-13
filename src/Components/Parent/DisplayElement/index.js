import React from 'react'

class DisplayElement extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dates: this.props.dates,
            showInfo: this.props.showInfo
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.showInfo !== prevProps.showInfo) {
            this.setState({
                dates: this.props.dates,
                showInfo: this.props.showInfo
            })
        }
    }

    render() {
        return (
            <div style={{display: this.state.showInfo? "block": "none"}}>
                <ul>
                    {this.state.dates.map(date=>(
                        <li key={date.name}>
                            {date.daysUntil} days until {date.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default DisplayElement