// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "Category_id",
  onDelete: "CASADE"
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "Category_id",
})
// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tag, {
  
})
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
