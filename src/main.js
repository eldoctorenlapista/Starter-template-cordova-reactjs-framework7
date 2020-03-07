import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle';
import '../node_modules/framework7/css/framework7.bundle.css';
import Framework7React from 'framework7-react';
Framework7.use(Framework7React);

import Init from '../components/Init';

ReactDOM.render(<Init />, document.getElementById('app'));
