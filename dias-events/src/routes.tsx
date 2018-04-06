import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';

import { Static, Thanks } from 'components/static';

export const Routes = (
    <div>
        <Route exact path="/" component={Static} />
        <Route exact path="/thanks" component={Thanks} />
    </div>
);
