require('dotenv').config();
const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log('✅ DB logged successfully');
    })
    .catch((error) => {
      console.log('❌ DB CONNECTION FAILED');
      console.error(error);
      process.exit(1); // fixed typo: "exist" ➜ "exit"
    });
};


