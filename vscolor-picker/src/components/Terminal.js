import React, { Component } from  'react';
import "./Terminal.css";

export default class Terminal extends Component {
    render() {
        let props = this.props;
        console.log(props)
        return (
            <div id="Terminal">
                <div className="Terminal">
                    <p>Terminal</p>
                </div>
            </div>
        )
    }
}