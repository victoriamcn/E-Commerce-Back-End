const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const productTagData = await ProductTag.findAll({
      // JOIN with products, using the through table
      include: [
        {
          model: Product
        },
        {
          model: Tag
        }]
    });
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
  console.log("Category GET Request")
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data


  console.log("Category id GET Request")
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const productTagData = await ProductTag.create(req.body);
    res.status(200).json(productTagData);
  } catch (err) {
    res
  }
  console.log("Category POST Request")
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const productTagData = await ProductTag.update({
      where: { id: req.params.id }
    });
    if (!productTagData) {
      res.status(404).json({ message: 'No product tags with this id!' });
      return;
    }
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
  console.log("Category id PUT Request")

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const productTagData = await ProductTag.destroy({
      where: { id: req.params.id }
    });
    if (!productTagData) {
      res.status(404).json({ message: 'No product tags with this id!' });
      return;
    }
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
  console.log("Category id DELETE Request")
});

module.exports = router;
