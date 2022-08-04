import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import loginRoutes from './routes/login.js'
import commentRoutes from './routes/comments.js'
import replyRoutes from './routes/replies.js'

import 'dotenv/config'

const app = express();

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//Routes
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)
app.use('/api/login', loginRoutes)
app.use('/api/comment', commentRoutes)
app.use('/api/replies', replyRoutes)

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`)))
  .catch(error => console.log(error))

