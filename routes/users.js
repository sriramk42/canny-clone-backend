import express from 'express'
import { getUsers, getUser, createUser } from '../controllers/users.js'
import { userExtractor } from '../utils/middleware'

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', userExtractor, createUser)

export default router