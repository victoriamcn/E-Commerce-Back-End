const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: { // INT AUTO_INCREMENT PRIMARY KEY
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: { // INT
      type: DataTypes.INTEGER,
      // FOREIGN KEY (product_id) REFERENCES Product (id)
      references: {
        model: 'Product',
        key: 'id',
        unique: false
      }
    },
    tag_id: { // INT
      type: DataTypes.INTEGER,
      // FOREIGN KEY (tag_id) REFERENCES Tag (id)
      references: {
        model: 'Tag',
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
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
