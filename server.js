// require('dotenv').config();
// const app = require ('./app')
// const {PORT} = process.env


// app.listen(PORT, () => console.log(`server is running at port ${PORT}...`));

require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/database'); // adjust path as needed

const PORT = process.env.PORT || 5000;

// ✅ Call DB connection function
connectDB.connect();

app.listen(PORT, () => {
  console.log(`🚀 Server is running at port ${PORT}...`);
});
