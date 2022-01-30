import React, { useState } from "react";
import axios from 'axios';
import './NodeMailer.css';
import { Drivers } from "../Utility/Links";
import { NodeMail, Links, H2, Div } from "../Utility/Styles";

const NodeMailer = () => {
	const [input, setInput] = useState({
		subject: '',
		message: '',
	});

	const sendEmail = () =>{
		let body = {
			subject: `${input.subject}`,
			email: 'kirkeeng_smurf777@outlook.com',
			message: `${input.message} Response: ${input.email}`
		};

		axios.post('/api/nodeMailer', body)
			.then(res => res.sendStatus(200))
			.catch(err => console.log(err))
	};

	return (
		<Div>
		<NodeMail>
			<div className='cont'>
				<Links>
					<Drivers />
				</Links>
				<section className="box">
					<H2 className="name">let us know what you think!</H2>
						<div>
							<input 
								placeholder='subject' 
								onChange={e => setInput({ ...input, subject: e.target.value })} 
								className="input" />
						</div>
					<div>
						<textarea 
							rows="10" 
							cols="75" 
							onChange={e => setInput({ ...input, message: e.target.value })}
							className="textarea"></textarea>
					</div>
					<button 
						onClick={() => sendEmail()}>Send Email</button>
				</section>
			</div>
		</NodeMail>
		</Div>
	);
};

export default NodeMailer;