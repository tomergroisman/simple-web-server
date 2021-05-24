const { Router } = require('express');
const handlers = require('../handlers');

const router = Router();

// Home
router.get('/', handlers.home);

module.exports = router