const { Router } = require('express');
const router = Router();

const upload = require('../config/multerConfig')
const { Posts } = require('../controllers/postsController');

router.post('/posts', Posts);

module.exports = router;