import React, { useEffect, useState } from "react";
import axios from 'axios';
import { logout } from '../../redux/reducer';
import { addItem } from "../../redux/bagReducer";
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './Product.css'

const Driver = styled.div`
	width: 100%;
  height: 100%;
	background-color: grey;`
const ProductMap = styled.div`
	display: flex;
  justify-content: space-between;
  align-items: center;
	border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  flex-wrap: wrap;`
const Button = styled.button`
	background-color: black;
	color: white;
	padding: 20px 48px;
	text-align: center;
	font-size: 20px;
	cursor: pointer;`
const Main =styled.div`
	display: flex;
	justify-content: center;`

const Products = (props) => {
	const [bag, setBag] = useState([])
	const [products, setProducts] = useState([])

	useEffect((props)=> {
		axios.get('/api/products')
			.then(res => setProducts( res.data ))
				.catch(err => {console.log(err)
})}, [])

const logout = () => {
	axios.post('/api/auth/logout')
		.then(res => props.history.push('./'))
			.catch(err => console.log(err));
}

const addToBag = (description, image_url) => {
	axios.post('/api/bags', {description, image_url})
    .then(res => setBag( res.data ))
      .catch(err => console.log(err))
	}

	return (
	<Main>
		<Driver>
			<header>			
				<Link to='/bag'><Button>my bag</Button></Link>
				<Link to='/irons'><Button>irons</Button></Link>
				<Link to='/'><Button onClick={logout}>logout</Button></Link>
				<Link to='/stripe'><Button>contact us</Button></Link>
			</header>
			<ProductMap>
				{products.map((product) => {
					return (
						<div key={product.product_id}>
							<h2 >
							{product.description}
							</h2>
							<img className='img' src={product.image_url} alt={product.description}/>
							<button onClick={()=>addToBag(product.image_url, product.description)}>+</button>
						</div>
				)
			})}
			</ProductMap>
		</Driver>
	</Main>
	)
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { logout, addItem })(Products)