import express from 'express'
import { getReplies, createReply } from '../controllers/reply.js'
import { userExtractor } from '../utils/middleware.js'

const router = express.Router()

router.get('/', getReplies)
router.post('/', userExtractor, createReply)

export default router