/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

import React from 'react';
import Nav from "./nav";

export class Wrapper extends React.Component {
    render() {
        return (
            <div className="wrapper">
            <Nav/>
                <h2>No direction project</h2>
                {this.props.children}
            </div>
        );
    }
}
