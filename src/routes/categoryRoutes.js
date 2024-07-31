const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Định nghĩa các tuyến đường cho category
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
