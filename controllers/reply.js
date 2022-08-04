import Reply from '../models/reply.js'
import Comment from '../models/comment.js'

// get all replies
export const getReplies = async (req, res) => {
  const replies = await Reply.find({})
  res.status(200).json(replies)
}

// create a reply
export const createReply = async (req, res) => {
  const {body, user} = req
  const comment = await Comment.findById(req.params.id)

  const reply = new Reply({
    content: body.content,
    user: user._id,
    post: post._id
  })

  const savedReply = await reply.save()
  comments.replies = comments.replies.concat(savedReply._id)
  await comment.save()
  return res.status(200).json(savedReply)
}