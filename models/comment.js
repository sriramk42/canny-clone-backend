import mongoose from "mongoose";

const schema = mongoose.Schema

const commentSchema = new schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: schema.Types.ObjectId,
    ref: 'User'
  },
  post: {
    type: schema.Types.ObjectId,
    ref: 'Post'
  },
  replies: [
    {
      type: schema.Types.ObjectId,
      ref: 'Reply'
    }
  ]
})

const Comment = mongoose.model('Comment', commentSchema)
export default Comment