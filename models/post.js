import mongoose from "mongoose";

const schema = mongoose.Schema

const postSchema = new schema({
  title: {
    type: String,
    required: true
  },
  category: String,
  upvotes: Number,
  status: String,
  description: {type: String, required: true},
  comments: [
    {
      type: schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  user: {
    type: schema.Types.ObjectId,
    ref: 'User'
  }
},{timestamps: true})

const Post = mongoose.model('Post', postSchema)

export default Post