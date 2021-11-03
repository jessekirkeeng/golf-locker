require("dotenv").config();
const express = require('express')
const massive = require("massive");
const session = require("express-session");
const userCtrl = require('./controllers/user');
const productCtrl = require('./controllers/product');

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false },
}).then((db) => {
	app.set("db", db);
	console.log("db connected");
}).catch(err => console.log(err));

app.use(
	session({
		resave: true,
		saveUninitialized: false,
		secret: SESSION_SECRET,
		cookie: { maxAge:  60000 * 60 * 24 * 90}
})
);
app.use(express.json());

app.post('/api/auth/login', userCtrl.login);
app.post('/api/auth/logout', userCtrl.logout);
app.post('/api/auth/register', userCtrl.register);
app.get('/api/auth/user', userCtrl.getUser);

// app.get('/api/products', productCtrl.getProducts)



app.listen(3000, (SERVER_PORT) => console.log('listening on port 3000'))