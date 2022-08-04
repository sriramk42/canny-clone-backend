import Comment from '../models/comment.js'
import Post from '../models/post.js'

// get all comments
export const getComments = async (req, res) => {
  const comments = await Comment.find({})
  res.status(200).json(comments)
}

// create a comment
export const createComment = async (req, res) => {
  const {body, user} = req
  const post = await Post.findById(req.params.id)

  const comment = new Comment({
    content: body.content,
    user: user._id,
    post: post._id
  })

  const savedComment = await comment.save()
  post.comments = post.comments.concat(savedComment._id)
  await user.save()
  return res.status(200).json(savedPost)
}