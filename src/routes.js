import React from 'react';
import { Switch,  Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Products from './components/Products/Products';

export default (
	<Switch>
			<Route component={Login} exact path='/'/>
			<Route component={Products} path='/products' />
	</Switch>
)