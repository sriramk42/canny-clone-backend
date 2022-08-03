import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

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

const CONNECTION_URL = 'mongodb+srv://sriram:test1234@cluster0.il6cp.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`)))
  .catch(error => console.log(error))

