import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import './NodeMailer.css'

const NodeMail = styled.div`
	width: 100%;
  height: 100%;
	background-color: grey;
	display: flex;
	align-items: center;
  justify-content: center;`
const Input = styled.input`
	align-items: center;
	display: flex;
	justify-content: center;
	`
const Title = styled.title`
	display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
	font-size: 25px;
  margin: 10vh;`

const NodeMailer = (props) => {
	const [input, setInput] = useState({
		subject: '',
		message: '',
	})

	const sendEmail = () => {
		let body = {
			subject: `${input.subject}`,
			email: 'kirkeeng_smurf777@outlook.com',
			message: `${input.message} Response: ${input.email}`
		}

		axios.post('/api/nodeMailer', body)
			.then(res => res.sendStatus(200))
			.catch(err => console.log(err))
	}

	return (
		<NodeMail>
			<div className='cont'>
				<section>
					<Title>let us know what you think about the golf locker</Title>
					<input placeholder='subject' onChange={e => setInput({ ...input, subject: e.target.value })} />
					<textarea rows="10" cols="75" onChange={e => setInput({ ...input, message: e.target.value })}></textarea>
					<button onClick={() => sendEmail()}>Send Email</button>
				</section>
			</div>
		</NodeMail>
	)
}

export default NodeMailer