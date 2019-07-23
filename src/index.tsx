/* eslint-env browser */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Component = (): JSX.Element => <h1>{'HELLO'}</h1>;

ReactDOM.render(<Component />, document.getElementById('root'));
