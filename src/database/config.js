module.exports = {
	dialect: 'sqlite',
	storage: 'src/database/dev.sqlite',
	database: 'call_for_code_dev',
	define: {
		timestamps: true,
		underscored: true
	},
	logging: console.log
}

