import express from 'express'
import { getComments, createComment } from '../controllers/comment.js'
import { userExtractor } from '../utils/middleware.js'

const router = express.Router()

router.get('/', getComments)
router.post('/', userExtractor, createComment)

export default router