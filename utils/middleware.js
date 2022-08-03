import { request } from 'express'
import jwt, { decode } from 'jsonwebtoken'
import User from '../models/user.js'

const userExtractor = async (req, res, next) => {
  req.user = null
  const decodedToken = jwt.verify(req.token, process.env.SECRET)

  if (!req.token || !decodedToken.id) {
    return res.status(401).json({error: 'token missing or invalid'})
  }

  req.user = await User.findById(decodedToken.id)
  return next()
}