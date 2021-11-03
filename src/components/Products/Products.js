import React, { useEffect, useState } from "react";
import axios from 'axios'
import { logout } from '../../redux/reducer';
import { connect } from 'react-redux'
import styled from 'styled-components';

const Products = (props) => {
	const [products, setProducts] = useState({
		username: '',
		password: ''
	})

	const getProducts = ()=> {
		axios.get('/api/products')
			.then(res => {
				setProducts({ products: res.data })
		})}

	const logout = () => {
		axios.post('/api/auth/logout')
			.then(res => res.data.logout(res.data));
	}

	return (
		<div>
			<button onClick={logout} type='submit'>log out</button>
		</div>
	)
}

export default (Products)