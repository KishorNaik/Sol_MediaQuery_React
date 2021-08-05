import React, { Component } from "react";
import MediaQuery from 'react-responsive'

export default class Demo extends Component{
    public render(){

        return (
            <React.Fragment>
                <MediaQuery maxWidth={576}>
                    <h1>Small Device</h1>
                </MediaQuery>
                <MediaQuery minWidth={576} maxWidth={768}>
                    <h1>Medium Device</h1>
                </MediaQuery>
                <MediaQuery minWidth={769} maxWidth={992}>
                    <h1>Large Device</h1>
                </MediaQuery>
                <MediaQuery minWidth={993} maxWidth={1200}>
                    <h1>Extra large</h1>
                </MediaQuery>
                <MediaQuery minWidth={1200} maxWidth={1400}>
                    <h1>Extra extra large</h1>
                </MediaQuery>
            </React.Fragment>
        )
    }
}