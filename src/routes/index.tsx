import React from 'react';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/dashboard" component={Dashboard}/> 
        </Switch>
    )
}

export default Routes;