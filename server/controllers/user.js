const bcrypt = require("bcryptjs");

module.exports = {
	register: async (req, res, next) => {
		const { id, username, password } = req.body;
		const db = req.app.get("db");
		const result = await db.user.find_user([username]);
		const existingUser = result[0];
		if (existingUser) {
				res.status(409).send("Existing User");
		}
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		const registeredUser = await db.user.create_user([ username, hash ]);
		const user = registeredUser[0];
		req.session.user = {
				username: user.username,
				id: user.id,
		};
		res.status(200).send(req.session.user)
},
login: async (req, res, next) => {
	const { username, password } = req.body;
	const findUser = await req.app.get('db').user.find_user([username]);
	const user = findUser[0];
if (!user) {
	return res.status(401).send('No user');
	}
	// console.log(user, password)
	const isAuthenticated = bcrypt.compareSync(password, user.password);
if (!isAuthenticated) {
	return res.status(403).send('Incorrect password');
	}
	req.session.user = { 
			id: user.id, 
			username: user.username 
	};
	return res.send(req.session.user);
},
logout: (req, res) => {
	req.session.destroy();
	return res.sendStatus(200);
},
getUser: (req, res, next) => {
	const { username, password } = req.body;
	const {user} = req.session;
	if (user && username === user.username && password === user.password) {
			req.session.user = user
			next()
	} else {
			res.status(403).send('Invalid username or password')
}
},
getMe: (req, res) => {
	
	console.log(req.session)
	const user = req.session.user;
  if (user) {
    res.status(200).send(user);
  } else {
    res.sendStatus(401);
  }
}
}