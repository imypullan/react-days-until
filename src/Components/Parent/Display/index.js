import React from 'react'
import ButtonElement from "./ButtonElement";
import DisplayElement from "./DisplayElement";
import TextElement from "./TextElement";

class Display extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <TextElement />
                {/*<DisplayElement dates={this.state.dates} showInfo={this.state.showInfo}/>*/}
                {/*<ButtonElement handleClick={this.prepareDates} />*/}
            </div>
        )
    }
}

export default Display