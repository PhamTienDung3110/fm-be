const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');

// Định nghĩa các tuyến đường cho loan
router.get('/', async (req, res) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
