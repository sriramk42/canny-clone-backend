import Post from '../models/post.js'

// get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("user", {
        username: 1,
        name: 1,
        avatar: 1
      })
      .populate("comments", {
        content: 1,
        user: 1
      })
      .sort({upvotes: -1})

    res.status(200).json(posts)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// get single post
export const getPost = async (req, res) => {
  const {id} = req.params

  const post = await Post.findById(id)
    .populate("comments")
    .populate("user", {
      username: 1,
      name: 1,
      avatar: 1
    })

  if (!post) {
    res.status(404).json({error: 'No such post'})
  }

  res.status(200).json(post)
}

// create a post
export const createPost = async (req, res) => {
  const {body, user} = req
  
  const post = new Post({
    title: body.title,
    category: body.category,
    upvotes: body.upvotes,
    status: body.status,
    description: body.description,
    comments: [],
    user: user._id,
  })

  if (!post.upvotes) {
    post.upvotes = 0;
  }

  if (!post.status) {
    post.status = "Suggestion";
  }

  const savedPost = await post.save()
  user.post = user.post.concat(savedPost._id)
  await user.save()
  return res.status(200).json(savedPost)
}