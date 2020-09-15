const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const bcryptjs = require('bcryptjs');
const uuid = require('uuid');

//model User
const User = require('./User');

const ROUNDS = 10;


const Upload = sequelize.define("Upload", {
  filename: 
  {
    type: DataTypes.STRING,
    allowNull: false
  },
}, 
{
  hooks: 
  {
    afterValidate: async (upload) => {
      // generate uuid v4:
      upload.id = uuid.v4();
    }
  },
  sequelize,
  tableName: 'uploads',
  underscored: true,
});

Upload.belongsTo(User, {
  foreignKey: 'user_id', 
  as: 'users'
});

module.exports = Upload;