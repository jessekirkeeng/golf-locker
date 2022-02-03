module.exports = {
	deleteUser: async (req, res) => {
		const { id } = req.params;
		const db = req.app.get("db");
  
  try {
    await db.user.delete_user(id);
    req.session.destroy();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
	},
	updateUsername: (req, res) => {
		const { id } = req.params;
		const { username } = req.body;
		const db = req.app.get("db");
	
		try {
			if (username !== "") {
				db.user.update_user(id, username);
				res.sendStatus(200);
			} 
		} catch (err) {
			console.log(err);
		};
	},
	removeUsername: (req, res) => {
		const { id } = req.params;
  const db = req.app.get("db");

  try {
    db.user.set_username(id);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  };
	},
};