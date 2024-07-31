const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const transactionRoutes = require('./transactionRoutes');
const categoryRoutes = require('./categoryRoutes');
const loanRoutes = require('./loanRoutes');

router.use('/users', userRoutes);
router.use('/transactions', transactionRoutes);
router.use('/categories', categoryRoutes);
router.use('/loans', loanRoutes);

module.exports = router;