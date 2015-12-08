/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

import React from 'react';
import Nav from "./nav";
import TimeHeader from './timeheader';

export class Wrapper extends React.Component {
    render() {
        return (
            <div className="wrapper">
            <TimeHeader/>
            <Nav/>
                {this.props.children}
            </div>
        );
    }
}
