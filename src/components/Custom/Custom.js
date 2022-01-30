import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Custom.css';
import { Driver, Img, Btnmap, ProductMap, Links, Items } from "../Utility/Styles";
import { StripeLink, NodeMail, MyBag, Drivers } from "../Utility/Links";

const Custom = () => {
	const [custom, setCustom] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		axios.get(`/api/customs`)
			.then(res => setCustom(res.data))
			.catch(err => console.log(err));
	}, []);

	const deleteProduct = id =>
		axios.delete(`/api/customDelete/${id}`)
			.then(res => setCustom(res.data))
			.catch(err => console.log(err)
			);

	const changeSetting = id =>
		axios.put(`/api/custom/setting/${id}`, { input })
			.then(res => setCustom(res.data))
			.catch(err => console.log(err));

	const clubs = custom.map((product, i) => {
		return (
			<Items key={i}>
				<input onChange={e => setInput(e.target.value)} />
				<Btnmap onClick={e => changeSetting(product.product_id)}>set custom name</Btnmap>
				<h2>{product.image_url}</h2>
				<Img className='img' src={product.description} alt={product.description} />
				<section >
					<Btnmap className='bottom' onClick={() => deleteProduct(product.custom_id)}>-</Btnmap>
				</section>
			</Items>
		);
	});

	return (
		<>
			<Driver>
				<Links className='cont'>
					<Drivers />
					<MyBag />
					<NodeMail />
					<StripeLink />
				</Links>
				<ProductMap className='maps'>
					{clubs}
				</ProductMap>
			</Driver>
		</>
	);
};

export default Custom;