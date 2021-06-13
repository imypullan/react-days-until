import React, {useState} from 'react'

class DisplayElement extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dates: this.props.dates
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.dates !== prevProps.dates) {
            this.setState({
                dates: this.props.dates
            })
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.dates.map(date=>(
                        <li>
                            {date.daysUntil}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default DisplayElement