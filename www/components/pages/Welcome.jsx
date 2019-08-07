import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Framework7 from '../../../node_modules/framework7';
import Framework7React from '../../../node_modules/framework7-react';
Framework7.use(Framework7React);
import { Page, Block } from '../../../node_modules/framework7-react';

class Welcome extends Component{

  render() {
    return (
      <Page>
        <Block>
          <p>Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
        </Block>
      </Page>
    )
  }

}

export default Welcome;
