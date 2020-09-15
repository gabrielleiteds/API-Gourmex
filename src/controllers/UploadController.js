const Upload = require('../models/Upload')
const User = require('../models/User')

module.exports = { 
	async upload(req, res) { 
		const file = req.file; 
		const user_id = req.userId; 

		const user = await User.findAll({
			where: {
				id: user_id, 
			}
		})
		const name = user.name; 

		console.log(user)

		if (file) 
		{
			const filename = file.filename; 
			const upload = await Upload.create({
				filename: req.file.filename,
				user_id, 
				User: user
			});

			return res.send(upload)
		}
	}
}