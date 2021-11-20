require("dotenv").config();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const express = require('express')
const massive = require("massive");
const session = require("express-session");
const { main, getCustomClubs, addToCustom, changeSetting } = require('./controllers/customCtrl')
const { login, logout, register, getUser } = require('./controllers/user');
const { getProducts, getIrons, readBag, deleteProduct, addToBag } = require('./controllers/product');

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

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: '.01',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `/api/products`,
    cancel_url: `/api/products`,
  });
  res.redirect(303, session.url);
});

app.post('/api/auth/login', login);
app.post('/api/auth/logout', logout);
app.post('/api/auth/register', register);
app.get('/api/auth/user', getUser);

app.get('/api/products', getProducts)
app.get('/api/products/irons', getIrons)
app.delete('/api/products/:id', deleteProduct)

app.get('/api/customs', getCustomClubs)
app.post('/api/customClub', addToCustom)
app.delete('/api/customDelete/:id', deleteProduct)
app.put('/api/custom/setting/:id', changeSetting)

app.get('/api/bag', readBag)
app.post('/api/bags', addToBag)
app.post('/api/nodeMailer', main)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT}`))