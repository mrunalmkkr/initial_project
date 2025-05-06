const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authroutes');
const feedRoutes = require('./routes/feedroutes');
const userRoutes = require('./routes/userroutes');
const errorMiddleware = require('./middleware/authmiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/users', userRoutes);

app.use(errorMiddleware);

module.exports = app;
