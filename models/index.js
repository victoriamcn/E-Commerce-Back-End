// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedProducts = require('../seeds/product-seeds');
const seedTags = require('../seeds/tag-seeds');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
//third table needed to store the foreign keys
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
})

// Tags belongToMany Products (through ProductTag)
//third table needed to store the foreign keys
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
})


//export is deconstructed
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
