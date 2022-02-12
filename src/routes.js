import React from 'react';
import { Routes,  Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Bag from './components/Bag/Bag';
import Stripe from './components/Stripe/Stripe';
import NodeMailer from './components/NodeMailer/NodeMailer';
import User from './components/Sample/User';
// import Custom from './components/Custom/Custom';

export default (
	<Routes>
			<Route element={<Login/>} path='/'/>
			<Route element={<Products/>} path='/products' />
			<Route element={<Bag/>} path='/bag' />
			<Route element={<User/>} path='/custom'/>
			<Route element={<Stripe/>} path='/stripe'/>
			<Route element={<NodeMailer/>} path='/nodeMailer'/>
	</Routes>
);