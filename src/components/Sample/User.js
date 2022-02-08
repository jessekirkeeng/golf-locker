import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./Sample";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import '../CSS/User.css';
import { Button, Button1, H2, Input, } from "../Utility/Styles";

const UserSettings = () => {

	const [username, setUsername] = useState("");
	const { user, setUser } = useContext(UserContext);
	let history = useHistory();

	

	const handleDelete = () => {
		try {
			axios.delete(`/api/auth/destroy/${user.id}`);
			setUser({});
			history.push("/");
		} catch (err) {
			console.log(err);
		};
	};

	const updateUsername = (val) => {
		setUsername(val);
	};

	const handleUsernameUpdate = (username) => {
		try {
			if (username !== "") {
				axios.put(`/api/auth/update/${user.id}`, { username });
				toast.success("Username updated");
				setUsername("");
			} else toast.info("Please enter a valid username.");
		} catch (err) {
			console.log(err);
		}
	};


	return (
		<div className="box-one">
			<div className="box-two">
				<div className="input-container">
					<H2>enter your username to get started</H2>
					<Input>
						<label>username </label>
						<input
							type="username"
							placeholder="enter username"
							value={username}
							onChange={(e) => updateUsername(e.target.value)} />
					</Input>
					<Button >
						<Button1 onClick={() => handleUsernameUpdate(username)}>update</Button1>
					<ToastContainer position="bottom-right" autoClose={2300} />

					<Button1
						onClick={() => {
							const confirmBox = window.confirm(
								"This will delete your account"
								);
								if (confirmBox) {
									handleDelete();
								}}}>
						delete 
					</Button1>
				</Button>
									</div>
	

			</div>
			
		</div>
	);
};

export default UserSettings;
