const bcrypt = require('bcryptjs')
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

module.exports = {
	async create(req, res) {
		const { name, email, password } = req.body;

		try {
			const userExists = await User.findOne({
				where: { email }
			});

			if (userExists) {
				return res.status(400).json({ error: 'User already exists' });
			}
			var hashPassword = bcrypt.hashSync(password, 8);

			const user = await User.create({
				name,
				email,
				password: hashPassword,
			});

			user.password = undefined;

			return res.status(201).json({ user, token: generateToken({ id: user.id }) });

		} catch (err) {
			return res.status(500).json();
		}
	},
}