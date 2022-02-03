import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/reducer";
import { UserContext } from "./../Sample/Sample";
import './Product.css';
import { NodeMail, MyBag, Logout,  } from "../Utility/Links";
import { Items, Img, Driver, Links, ProductMap, Btnmap, H2 } from "../Utility/Styles";
import User from '../Sample/User';

const Products = () => {
	const { user } = useContext(UserContext);
	const [irons, setIrons] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('/api/products')
			.then(({ data }) => setIrons(data))
			.catch(err => console.log(err));
	}, []);


	const getItems = (description, usersId, productId) => {
		try {
			axios.post(`/api/bagged/add/${user.id}`, { description, usersId, productId })
			.then(({ data }) => {
				dispatch({
					type: ACTIONS.ADD_PURCHASE,
					payload: data,
				});
			axios.get(`/api/bagged/${user.id}`)
			.then(({ data }) => {
					dispatch({
						type: ACTIONS.GET_ITEMS,
						payload: data,
					});
				});
		});
	} catch (err) {
		console.log(err);
	};
};

	const itemMap = irons.map((item, i) => {
		return (
			<Items key={i} className="items">
				<Img
					src={item.image_url}
					alt='product'
					/>
					<H2>
						{item.description}
					</H2>
				<Btnmap className="btn-1"
					onClick={() => getItems([item.description, user.id, item.id])}>
					+
				</Btnmap>
			</Items>
		);
	});

	return (
		<>
			<Driver>
				<Links className='linked'>
					<MyBag className='btn-1' />
					<NodeMail className='btn-1' />
					<User className='btn-1' />
					<Logout className='btn-1' />
				</Links>
				<ProductMap className='map'>
					{itemMap}
				</ProductMap>
			</Driver>
		</>
	);
};

export default Products;