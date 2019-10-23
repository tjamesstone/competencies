import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from './App'
import Otherpage from './Otherpage'

export default (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/otherpage' component={Otherpage}/>
    </Switch>
)