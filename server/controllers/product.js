module.exports = {
	getProducts: (req, res) => {
		const db = req.app.get('db')
		db.products.read_products()
    .then(products => res.status(200).send(products))
		.catch(err => console.log(err))
},
	readBag: (req, res) => {
		const db = req.app.get('db')
		db.bag.read_bag()
		.then(cartItems => res.send(cartItems))
		.catch(err => console.log(err))
},
	deleteProduct: (req, res) => {
		const db = req.app.get('db')
		let {id} = req.session.user;
		db.bag.delete_product(req.params.id, +id)
		.then(product => res.send(product))
		.catch(err => console.log(err))
},
	addToBag: (req, res) => {
		const db = req.app.get('db')
		let {description, image_url} = req.body;
		let {id} = req.session.user;
    db.bag.new_product(id, description, image_url)
		.then(product => res.send(product))
		.catch(err => console.log(err))
	},
	addedClub: (req, res) => {
		const { description, usersID, productID } = req.body;
		const db = req.app.get("db");
		db.bag.new_product(description, usersID, productID)
		.then(db.bag.read_bag(usersID)
		.then(data => res.status(200).send(data)))
	},
	getClubs: (req, res) => {
		const { id } = req.params;
		const db = req.app.get("db");
		db.custom.read_customs([+id])
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err));
	},
	deleteItem: (req, res) => {
		const { id, item } = req.params;
		const db = req.app.get("db");
		db.bag.delete_product(id, item)
    .then(db.custom.read_customs([+id])
		.then(data => res.status(200).send(data))
		.catch(err => console.log(err)));
	}
}