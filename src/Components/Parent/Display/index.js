import React from 'react'
import ButtonElement from "./ButtonElement";
import DisplayElement from "./DisplayElement";
import TextElement from "./TextElement";

class Display extends React.Component {

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
            <div>
                <TextElement />
                <DisplayElement dates={this.props.dates} showInfo={this.props.showInfo}/>
                <ButtonElement handleClick={this.props.handleClick} />
            </div>
        )
    }
}

export default Display