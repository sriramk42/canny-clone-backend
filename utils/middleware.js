import { request } from 'express'
import jwt, { decode } from 'jsonwebtoken'
import User from '../models/user.js'

export const userExtractor = async (req, res, next) => {
  const {authorization} = req.headers
  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1]
  const decodedToken = jwt.verify(token, process.env.SECRET)

  req.user = await User.findById(decodedToken.id)
  return next()
}