const nodemailer = require("nodemailer");

async function main(req, res) {
  
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

module.exports = {
	main,
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