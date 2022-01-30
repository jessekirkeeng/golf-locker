import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserContext } from "./../Sample/Sample";
import { ACTIONS } from "../../redux/reducer";
import axios from 'axios';
import './Bag.css';
import { Cust, NodeMail, Logout, Drivers } from '../Utility/Links';
import { Items, Img, Driver, Links, ProductMap, Btnmap, H2 } from "../Utility/Styles";

const Bag = () => {
	const { user } = useContext(UserContext);
	const selector = useSelector(state => state.items);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user.id) {
			axios.get(`/api/bagged/${user.id}`)
				.then(({ data }) => {
					dispatch({
						type: ACTIONS.GET_ITEMS,
						payload: data,
					});
				})
				.catch(err => console.log(err))};
	}, [dispatch, user.id]);

	const deleteItem = (id, item) => {
		try{
			axios.delete(`/api/customDelete/${id}/${item}`)
			.then(({data}) => {
				dispatch({
          type: ACTIONS.DELETE_ITEM,
          payload: data,
        });
			});
			axios.get(`/api/bagged/${user.id}`)
			.then(({ data }) => {
				dispatch({
					type: ACTIONS.GET_ITEMS,
					payload: data,
				});
			});
	} catch (err) {
		console.log(err);
	};
	};

	const productMap = selector.map((item, i) => {
		return (
			<Items key={i}>
				<Img
					src={item.image_url}
					alt="pic"
					className="img" />
					<H2>
						{item.description}
					</H2>
				<Btnmap 
					className='btn-1'
					onClick={() => deleteItem(user.id, item.description)}> - 
				</Btnmap>
			</Items>
		);
	});

	return (
		<Driver className="head">
			<Links className='links'>
				<Drivers className='btn' />
				<Cust className='btn' />
				<NodeMail className='btn' />
				<Logout className='btn' />
			</Links>
			<ProductMap className='map'>
				{productMap}
			</ProductMap>
		</Driver>
	);
};

export default Bag;