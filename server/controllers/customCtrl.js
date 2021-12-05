const nodemailer = require("nodemailer");

module.exports = {
	main: (req, res, next) =>{
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
    const mailOptions = {
      from: `golf locker`,
      to: `${req.body.email}`,
      subject: `${req.body.subject}`,
      text: `${req.body.message}`,
      replyTo: `${process.env.EMAIL}`
    }
    transporter.sendMail(mailOptions, function (err, res) {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        null
      }
    })
  },
  getCustomClubs: (req, res)=> {
		const db = req.app.get('db')
		db.custom.read_customs()
		.then(items => res.status(200).send(items))
		.catch(err => console.log(err))
	},
  addToCustom: (req, res)=>{
    const db = req.app.get('db')
		let {description, image_url} = req.body;
		let {id} = req.session.user;
    db.custom.new_custom_club(id, description, image_url)
		.then(custom => res.status(200).send(custom))
		.catch(err => console.log(err))
  }, 
  changeSetting: (req, res)=>{
    const db = req.app.get('db');
		let {id} = req.params;
    let {input} = req.body;
    let userId = req.session.user.id
    db.custom.update_club(id, input, userId)
		.then(product => res.status(200).send(product))
		.catch(err => console.log(err))
  }
}