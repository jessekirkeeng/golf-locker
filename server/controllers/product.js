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
		.then(cartItems => res.status(200).send(cartItems))
		.catch(err => console.log(err))
},
	deleteProduct: (req, res) => {
		const db = req.app.get('db')
		let {id} = req.session.user;
		db.bag.delete_product(req.params.id, +id)
		.then(product => res.status(200).send(product))
		.catch(err => console.log(err))
},
	addToBag: (req, res) => {
		const db = req.app.get('db')
		let {description, image_url} = req.body;
		let {id} = req.session.user;
    db.bag.new_product(id, description, image_url)
		.then(product => res.status(200).send(product))
		.catch(err => console.log(err))
	},
}