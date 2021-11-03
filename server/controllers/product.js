module.exports = {
	getProducts: async (req, res) => {
		let { id } = req.session.user;
		const db = await req.app.get('db')
		db.products.read_products()
    .then(products => res.status(200).send(products))
}
}