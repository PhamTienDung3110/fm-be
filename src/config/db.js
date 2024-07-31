const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@fm.j92slvj.mongodb.net/?retryWrites=true&w=majority&appName=fm`;

mongoose.connect(uri)
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas: ', err);
});

module.exports = mongoose;
