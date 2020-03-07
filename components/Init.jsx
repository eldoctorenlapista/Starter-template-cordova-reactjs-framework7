import React, { Component } from 'react';
import { App, Page, View } from 'framework7-react';
import Routes from "./routes";

const params = {
    id: 'com.nuvola.app',
    name: 'Nuvola',
    routes: Routes,
    version: '1.0.0',
    theme: 'ios',
    dialog: {
        title: 'Nuvola'
    }
};

export default class Init extends Component {

    render() {
        return (
            <App params={params}>
                <View main url="/" />
            </App>
        )
    }

}
