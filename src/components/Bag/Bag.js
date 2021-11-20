import React, { useEffect, useState } from "react";
import axios from 'axios';
import { logout } from '../../redux/reducer';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


const Bag = (props) => {
	const [bag, setBag] = useState([])
	const [custom, setCustom] = useState([])
	

	useEffect((props) => {
		axios.get('/api/bag')
			.then(res => setBag(res.data))
			.catch(err => console.log(err)
			)
	}, [])

	const logout = () => {
		axios.post('/api/auth/logout')
			.then(res => props.history.push('./'))
			.catch(err => console.log(err));
	}

	const deleteProduct = (id) => {
		axios.delete(`/api/products/${id}`)
			.then(res => setBag(res.data))
			.catch(err => console.log(err)
			)
	}

	const addToCustom = (description, image_url) => {
		axios.post('/api/customClub', { description, image_url })
			.then(res => setCustom(res.data))
			.catch(err => console.log(err))
	}

	return (
		<div>
			<header>
				<Link to='/products'> <button>drivers</button></Link>
				<Link to='/irons'> <button>irons</button></Link>
				<button onClick={logout}>logout</button>
				<Link to='/custom'><button>smash factor</button></Link>
			</header>
			<section>
				{bag.map((product) => {
					console.log(product)
					return (
						<div key={product.product_id}>
							<h2 >
								{product.image_url}
							</h2>
							<img className='img' src={product.description} alt={product.description} />
							<button onClick={() => addToCustom(product.description, product.image_url)}>+</button>
							<button onClick={() => deleteProduct(product.product_id)}>-</button>
						</div>
					)

				})}
			</section>
		</div>
	)
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { logout })(Bag)