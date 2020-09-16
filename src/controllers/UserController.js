const bcrypt = require('bcryptjs')
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const capitalize = require('../utils/capitalize')

module.exports = {
	async create(req, res) {
		const { name, email, password } = req.body;

		const userExists = await User.findOne({
			where: { email }
		});

		if (userExists) {
			return res.status(400).json({ error: 'User already exists' });
		}

		const user = await User.create({
			name: capitalize(name),
			email,
			password,
		});

		user.password = undefined;

		return res.status(201).json({ user, token: generateToken({ id: user.id }) });
	},

	async show(req, res) {
		const { id } = req.params;

		if (req.userId != id)
			return res.status(401).json({
				error: 'The authenticated user cannot show another user'
			});

		try {
			const user = await User.findByPk(id);

			user.password = undefined;

			if (user) return res.render('Entrada.html');

			return res.status(400).json({ error: 'User not found' });

		} catch (err) {
			console.log(err)
			return res.status(500).json();
		}
	},
}