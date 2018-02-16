import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';

import { Home } from 'components/public';

export const Routes = (
        <Route exact path="/" component={Home} />
);
