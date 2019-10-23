import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Otherpage from './Otherpage'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/otherpage' component={Otherpage}/>

    </Switch>
)