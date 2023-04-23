// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: { // INT AUTO_INCREMENT PRIMARY KEY
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: { // VARCHAR(30) NOT NULL
      type: DataTypes.STRING,
      allowNull: false
    },
    price: { // DECIMAL NOT NULL
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    stock: { // INT(10) NOT NULL
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    category_id: { // INT
      // FOREIGN KEY (category_id) REFERENCES Category(id)
      type: DataTypes.INTEGER,
      references: {
        model : 'category',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
