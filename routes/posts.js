import express from 'express'
import { getPosts, getPost, createPost } from '../controllers/posts.js'
import { userExtractor } from '../utils/middleware.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/', userExtractor, createPost)

export default router