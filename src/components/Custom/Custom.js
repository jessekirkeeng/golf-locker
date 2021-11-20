import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;`

const Custom = (props) => {
	const [smash, setSmash] = useState([{
		loft: 10,
		shaft: 2,
		smash: 5
	}])
	const [custom, setCustom] = useState([])
	const [input, setInput] = useState('')

	useEffect((props) => {
		axios.get(`/api/customs`)
			.then(res => setCustom(res.data))
			.catch(err => console.log(err)
			)
	}, [])

	const deleteProduct = (id) => {
		axios.delete(`/api/customDelete/${id}`)
			.then(res => setCustom(res.data))
			.catch(err => console.log(err)
			)
	}

	const changeClub = (id) => {
		axios.put(`/api/custom/${id}`)
			.then(({ data }) => setSmash([data]))
			.catch(err => console.log(err))
	}

	const changeSetting = (id) => {
		axios.put(`/api/custom/setting/${id}`, {input})
			.then(res => setCustom(res.data))
			.catch(err => console.log(err))
	}

	const factor = (loft, shaft) => {
		let multiply = loft * shaft;
		setCustom(multiply)
	}

	return (
		<div>
			{custom.map((product, i) => {
				return (
					<div key={i}>
							<input onChange={(e) => setInput(e.target.value)} />
							<button onClick={(e) => changeSetting(product.product_id)}>Set custom name</button>
						<section>
						<h2>
							{product.image_url}
						</h2>
						</section>
						<img className='img' src={product.description} alt={product.description} />
						<button onClick={() => deleteProduct(product.custom_id)}>-</button>
					</div>
				)
			})}
		</div>
	)
}

export default Custom