module.exports = {
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
}