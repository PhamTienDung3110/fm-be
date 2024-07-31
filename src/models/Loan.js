const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
  name: { type: String, required: true },
  isDebt: { type: Boolean, required: true },
  isPaid: { type: Boolean, required: true },
  cost: { type: Number, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;
