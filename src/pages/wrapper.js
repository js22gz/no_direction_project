/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

import React from 'react';
import Nav from "./components/nav";
import TimeHeader from './components/timeheader';

let wStyle = {
	font: "1em 'Georgia', serif",
	background:"#FFFFFF",
	color:"#000000"
}

export class Wrapper extends React.Component {
    render() {
        return (
            <div className="wrapper" style={wStyle}>
            <TimeHeader/>
            <Nav/>
                {this.props.children}
            </div>
        );
    }
}
