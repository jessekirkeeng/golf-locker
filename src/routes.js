import React from 'react';
import { Switch,  Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Bag from './components/Bag/Bag';
import Stripe from './components/Stripe/Stripe';
import Custom from './components/Custom/Custom';
import NodeMailer from './components/NodeMailer/NodeMailer';
import User from './components/Sample/User'

export default (
	<Switch>
			<Route component={Login} exact path='/'/>
			<Route component={Products} path='/products' />
			<Route component={Bag} path='/bag'  />
			<Route component={User} path='/custom'/>
			<Route component={Stripe} path='/stripe'/>
			<Route component={NodeMailer} path='/nodeMailer'/>
			<Route component={User} path='/user' />
	</Switch>
);