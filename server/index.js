require("dotenv").config();
const stripe = require('stripe')('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');
const express = require('express');
const massive = require("massive");
const session = require("express-session");
const { 
  main, 
  getCustomClubs, 
  addToCustom, 
  changeSetting, 
} = require('./controllers/customCtrl');

const { 
  login, 
  logout, 
  register, 
  getUser,
  getMe,
} = require('./controllers/user');

const { 
  getProducts,
  addedClub,
  getClubs,
  deleteItem,
} = require('./controllers/product');

const{
  deleteUser,
  updateUsername,
} = require('./controllers/auth');

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false },
}).then(db => {
	app.set("db", db);
	console.log("db connected");
}).catch(err => console.log(err));

app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: SESSION_SECRET,
		cookie: { maxAge:  60000 * 60 * 24 * 90}
})
);
app.use(express.json());

app.use(express.static(`${__dirname}/../build`))

//*  Node Mailer  &  Stripe
app.post('/api/nodeMailer', main);
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'golf club',
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3030/products`,
    cancel_url: `http://localhost:3030/`,
  });
  res.redirect(303, session.url);
});
app.get('/secret', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    automatic_payment_methods: {enabled: true},
  });
  res.json({client_secret: intent.client_secret});
});

// *  User
app.post('/api/auth/login', login);
app.post('/api/auth/logout', logout);
app.post('/api/auth/register', register);
app.get('/api/auth/user', getUser);
app.get("/api/auth/me", getMe);

// *  Products
app.get('/api/products', getProducts);
app.post('/api/bagged/add/:id', addedClub);
app.get('/api/bagged/:id', getClubs);

// *  Custom
app.get('/api/customs', getCustomClubs);
app.post('/api/customClub', addToCustom);
app.put('/api/custom/setting/:id', changeSetting);
app.delete('/api/customDelete/:id/:item', deleteItem);
app.delete("/api/auth/destroy/:id", deleteUser);
app.put("/api/auth/update/:id", updateUsername);


const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`${port}`));