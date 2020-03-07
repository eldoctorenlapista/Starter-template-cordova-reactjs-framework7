import React, { Component } from 'react';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const app = this.$f7;
        setTimeout(function () {
            app.dialog.alert('Hello!');
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
            </div>
        );
    }

}


