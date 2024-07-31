const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  cost: { type: String, required: true },
  detail: { type: String, required: true },
  status: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  category_id: { type: Schema.Types.ObjectId, ref: 'Category' }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
