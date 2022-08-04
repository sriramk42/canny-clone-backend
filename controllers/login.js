import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const postLogin = async (req, res) => {
  const {body} = req

  const user = await User.findOne({username: body.username})
  const passwordCorrect = user == null ? false : await bcrypt.compare(body.password, user.passwordHash)

  if(!(user && passwordCorrect)) {
    return res.status(401).json({error: 'invalid username or password'})
  }

  const userForToken = {
    username: user.username,
    id: user._id
  }

  const token =  jwt.sign(userForToken, process.env.SECRET, {})

  return res.status(200).send({
    token,
    username: user.username,
    name: user.name,
    id: user._id,
    avatar: user.avatar,
    feedback: user.feedback,
    liked: user.liked,
  })
}
