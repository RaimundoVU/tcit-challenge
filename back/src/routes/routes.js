const { Router } = require('express')
const router = Router();
const { getPosts, createPost, deletePost } = require('../controllers/index.controller');

router.get('/posts', getPosts)
router.post('/posts', createPost)
router.delete('/posts/:id', deletePost);

module.exports = router;
