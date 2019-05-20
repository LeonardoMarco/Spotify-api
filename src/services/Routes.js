import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes'

import Auth from '../pages/Auth'
import Main from '../pages/Main'

const Routes = e => (
    <Router>
        <Switch>
            <Route path="/" exact component={Auth} />
            <PrivateRoutes path="/main" component={Main} />
        </Switch>
    </Router>
)

export default Routes