const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  console.log("Category GET Request")
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log("Category id GET Request")
});

router.post('/', (req, res) => {
  // create a new category
  console.log("Category POST Request")
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log("Category id POST Request")
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  console.log("Category id DELETE Request")
});

module.exports = router;
