import mongoose from "mongoose";

const schema = mongoose.Schema

const userSchema = new schema({
  username: {
    type: String,
    unique: true
  },
  name: String,
  passwordHash: String,
  email: String,
  avatar: {
    type: String
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  liked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
})

const User = mongoose.model('User', userSchema)

export default User