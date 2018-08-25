import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { injectGlobal } from 'styled-components';

injectGlobal`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

:root {
  // css vars
}

html {
  font-size: 62.5%;
}

body {
  overflow-x: hidden;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
