const express = require('express');
const { getUser } = require('../controllers/usercontrollers');
const authMiddleware = require('../middleware/authmiddleware');
const router = express.Router();

router.get('/:id', authMiddleware, getUser);

module.exports = router;
