import User from '../models/user.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// get all posts
export const getUsers = async (req, res) => {
  const users = await User.find({})
  res.status(200).json(users)
}

// get single post
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).end()
  }
}

// create a user
export const createUser = async (req, res) => {
  const {body} = req

  if (body.password.length <= 4) {
    return res.status(400).json({error: 'password too short'})
  }

  const salt = 10
  const passwordHash = await bcrypt.hash(body.password, salt)

  const user = new User({
    username: body.username,
    email: body.email,
    name: body.name,
    avatar: body.avatar,
    passwordHash
  })

  const savedUser = await user.save()
  return res.status(200).json(savedUser)
}