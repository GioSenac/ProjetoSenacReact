const { Router } = require('express');
const router = Router();

const upload = require('../config/multerConfig')
const { Posts } = require('../controllers/postsController');

router.post('/posts/create', upload.array('files', 3), Posts);

module.exports = router;