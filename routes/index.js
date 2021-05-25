const { Router } = require('express');
const handlers = require('../handlers');

const router = Router();

// Home
router.get('/', handlers.home);

// All wines
router.get('/wines', handlers.wines);

module.exports = router