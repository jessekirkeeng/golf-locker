module.exports = {
	getProducts: (req, res) => {
		const db = req.app.get('db')
		db.products.read_products()
    .then(products => res.status(200).send(products))
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