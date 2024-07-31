const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Định nghĩa các tuyến đường cho transaction
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
