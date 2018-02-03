import React, { Component } from 'react';
import Main from '../main/main'
import UserHome from '../userHome/userHome'
import {Switch, Route} from 'react-router-dom';

export default class Body extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/userhome' component={UserHome}/>
            </Switch>
        )
    }
}