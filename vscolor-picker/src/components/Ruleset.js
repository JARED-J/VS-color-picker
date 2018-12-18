import React, { Component } from 'react';
import './Ruleset.css';
import Terminal from './Terminal';
import {workbenchRules, tokenRules} from '../config';

export default class Ruleset extends Component {

    constructor(props) {
        super(props)
        this.state = {...workbenchRules, ...tokenRules};
        this.handleWorkbenchColorChange = this.handleWorkbenchColorChange.bind(this);
        this.handleTokenColorChange = this.handleTokenColorChange.bind(this);
    }

    handleWorkbenchColorChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const newState = { ...this.state.workbenchColorCustomizations, [name]: value}
        this.setState({ workbenchColorCustomizations: newState});
    }

    handleTokenColorChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const newState = { ...this.state.editorTokenColorCustomizations, [name]: value}
        this.setState({ editorColorCustomizations: newState});
    }

    render() {
        return (
            <div id="Ruleset-Terminal">
                <div className="Ruleset">
                    <form className="rule-form">
                        {Object.keys(this.state.workbenchColorCustomizations).map(rule => (
                                <label key={rule}>
                                {rule}: <input 
                                    type="color"
                                    name={rule}
                                    onChange={this.handleWorkbenchColorChange}
                                    className={`label-clr`}/>
                                </label>
                        ))}
                        {Object.keys(this.state.editorTokenColorCustomizations).map(rule => (
                            <label key={rule}>
                                {rule}: <input 
                                    type="color"
                                    name={rule}
                                    onChange={this.handleTokenColorChange}
                                    className={`label-clr`}/>
                            </label>
                        ))}
                    </form>
                </div>
                <Terminal props={this.state}/>
            </div>
        )
    }
}