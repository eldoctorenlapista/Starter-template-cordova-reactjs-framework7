import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Framework7 from '../../node_modules/framework7';
import Framework7React from '../../node_modules/framework7-react';
Framework7.use(Framework7React);

import '../../node_modules/framework7/css/framework7.bundle.css';

import { App, View, Navbar, NavLeft, NavRight, Link, NavTitle } from '../../node_modules/framework7-react';

import Welcome from '../components/pages/Welcome';

import routes from '../routes';

const appOptions = {
  name: 'Starter App',
  id: 'com.starter.app',
}

class Init extends Component{

  render() {
    return (
      <App>
        <View main>
          <Navbar>
            <NavLeft>
              <Link>
                <i className="material-icons">keyboard_backspace</i>
              </Link>
            </NavLeft>
            <NavTitle>Starter App</NavTitle>
            <NavRight>
              <Link icon="icon-bars" panelOpen="right"></Link>
            </NavRight>
          </Navbar>
          <Welcome />
        </View>
      </App>
    )
  }

}

export default Init;
