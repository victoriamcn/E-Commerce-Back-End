const router = require('express').Router();
const { Category, Product } = require('../../models');
const seedProducts = require('../../seeds/product-seeds');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // GET all categories: be sure to include its associated Products
  try {
    const categoryData = await Category.findAll(
      // JOIN with products, using the through table
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  console.log("Category GET Request")
});

router.get('/:id', async (req, res) => {
  // GET one category by its `id` value: be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params, id, {
      // JOIN with products, using the through table
      include [{ model: Product, through: Category }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  console.log("Category id GET Request")
});

router.post('/', async (req, res) => {
  // create a new category
  console.log("Category POST Request")
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  console.log("Category id POST Request")
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  console.log("Category id DELETE Request")
});

module.exports = router;
