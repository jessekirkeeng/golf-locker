import React, { useEffect, useState } from "react";
import axios from 'axios';
import { logout } from '../../redux/reducer';
import { addItem } from "../../redux/reducer";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Main = styled.div`
	width: 100%;
  height: 260px;
  background: white;
  box-shadow: var(--shadow);
  padding: 16px;
  margin-bottom: 28px;`
const Map =styled.div`
	width: 100%;
  height: 350px;
  background: white;
  box-shadow: var(--shadow);
  padding: 16px;
  overflow-y: scroll;`
const Iron =styled.div`
	display: flex;
	justify-content: center;
	margin-top: 52px;`
const Button = styled.button`
	background-color: black;
	color: white;
	padding: 20px 48px;
	text-align: center;
	font-size: 20px;
	cursor: pointer;`

const Irons = (props)=>{
	const [irons, setIrons] = useState([])
	const [bag, setBag] = useState([])

	useEffect((props) => {
		axios.get('/api/products/irons')
		.then(res => setIrons( res.data ))
		.catch(err => {console.log(err)
	})}, [])

	const logout = () => {
		axios.post('/api/auth/logout')
			.then(res => props.history.push('./'))
			.catch((err) => console.log(err));
	}

	return (
	<Iron>
		<Main>
			<header>
				<Link to='/bag'><Button>my bag</Button></Link>
				<Link to='/products'><Button>drivers</Button></Link>
				<Link to='/'><Button onClick={logout}>logout</Button></Link>
				<Link to='/stripe'><Button>contact us</Button></Link>
			</header>
			<Map>
				{irons.map((iron) => {
					return (
						<div key={iron.product_id}>
							<h2>
								{iron.description}
							</h2>
							<img className='img' src={iron.image_url} alt={iron.description}/>
							<button onClick={()=>props.addItem()}>+</button>
						</div>
				)
			})}
			</Map>
		</Main>
	</Iron>
	)
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { logout, addItem })(Irons)