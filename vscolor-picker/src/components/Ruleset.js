import React, { Component } from 'react';
import './Ruleset.css';
import Terminal from './Terminal';

export default class Ruleset extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "name": "",
            "type": "dark",
            "colors": {
              "activityBar.background": "",
              "activityBar.foreground": "",
              "activityBarBadge.background": "",
              "activityBarBadge.foreground": "",
              "badge.background": "",
              "button.background": "",
              "debugToolBar.background": "",
              "dropdown.background": "",
              "diffEditor.insertedTextBackground": "",
              "dropdown.border": "",
              "editor.background": "",
              "editorError.foreground": "",
              "editorIndentGuide.activeBackground": "",
              "editorMarkerNavigation.background": "",
              "editorRuler.foreground": "",
              "editor.lineHighlightBackground": "",
              "editor.selectionBackground": "",
              "editor.selectionHighlightBackground": "",
              "editor.selectionHighlightBorder": "",
              "editorCursor.background": "",
              "editorCursor.foreground": "",
              "editorBracketMatch.border": "",
              "editorBracketMatch.background": "",
              "editor.findMatchBackground": "",
              "editor.findMatchBorder": "",
              "editor.findMatchHighlightBackground": "",
              "editor.wordHighlightBackground": "",
              "editor.wordHighlightBorder": "",
              "editor.wordHighlightStrongBackground": "26",
              "editor.wordHighlightStrongBorder": "",
              "editorGroup.background": "",
              "editorGroup.border": "",
              "editorGroupHeader.tabsBackground": "",
              "editorIndentGuide.background": "",
              "editorLineNumber.foreground": "",
              "editorActiveLineNumber.foreground": "",
              "editorWhitespace.foreground": "",
              "editorHoverWidget.background": "",
              "editorHoverWidget.border": "",
              "editorSuggestWidget.background": "",
              "editorSuggestWidget.border": "",
              "editorSuggestWidget.selectedBackground": "",
              "editorWidget.background": "",
              "focusBorder": "",
              "input.background": "",
              "list.activeSelectionBackground": "",
              "list.activeSelectionForeground": "",
              "list.focusBackground": "",
              "list.hoverBackground": "",
              "list.highlightForeground": "",
              "list.inactiveSelectionBackground": "",
              "list.inactiveSelectionForeground": "",
              "peekViewEditor.matchHighlightBackground": "",
              "scrollbarSlider.background": "",
              "scrollbarSlider.activeBackground": "",
              "scrollbarSlider.hoverBackground": "",
              "sideBar.background": "",
              "sideBarSectionHeader.background": "",
              "statusBar.background": "",
              "statusBar.foreground": "",
              "statusBarItem.hoverBackground": "",
              "statusBar.noFolderBackground": "",
              "statusBar.debuggingBackground": "",
              "statusBar.debuggingBorder": "",
              "statusBar.debuggingForeground": "",
              "tab.activeBackground": "",
              "tab.border": "",
              "tab.inactiveBackground": "",
              "tab.hoverBackground": "",
              "tab.unfocusedHoverBackground": "",
              "terminal.foreground": "",
              "terminal.ansiBlack": "",
              "terminal.ansiBlue": "",
              "terminal.ansiGreen": "",
              "terminal.ansiYellow": "",
              "titleBar.activeBackground": "",
              "titleBar.activeForeground": "",
              "titleBar.inactiveBackground": "",
              "titleBar.inactiveForeground": ""
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    handleColorChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const newState = { ...this.state.colors, [name]: value}
        this.setState({ colors: newState});
    }

    render() {
        return (
            <div id="Ruleset-Terminal">
                <div className="Ruleset">
                    <form className="rule-form">
                        <label>
                            Name: <input 
                            type="text"
                            name="name"
                            onChange={this.handleInputChange}/>
                        </label>
                        {Object.keys(this.state.colors).map(rule => (
                                <label key={rule}>
                                {rule}: <input 
                                    type="color"
                                    name={rule}
                                    onChange={this.handleColorChange}
                                    className="label-clr"/> {/* rule is equal to the rule in state*/}
                                </label>
                        ))}
                    </form>
                </div>
                <Terminal props={this.state}/>
            </div>
        )
    }
}