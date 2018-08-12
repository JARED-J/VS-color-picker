import React, { Component } from 'react';
import './Ruleset.css';
import Terminal from './Terminal';

export default class Ruleset extends Component {

    constructor() {
        super()
        this.state = {
            // rules
        }
    }

    render() {
        return (
            <div id="Ruleset-Terminal">
                <div className="Ruleset">
                    <p>Ruleset Component</p>
                </div>
                <Terminal/>
            </div>
        )
    }
}