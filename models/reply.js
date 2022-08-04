import mongoose from "mongoose";

const schema = mongoose.Schema

const replySchema = new schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: schema.Types.ObjectId,
    ref: 'User'
  },
  comment: {
    type: schema.Types.ObjectId,
    ref: 'Comment'
  }
})

const Reply = mongoose.model('Reply', replySchema)
export default Reply