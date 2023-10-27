require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()
const fileUpload = require("express-fileupload")

const connectDB = require("./db/connect")
const userRouter = require("./routes/userRoutes")

const notFoundMiddleware = require("./middleware/not-found")
const errorMiddleware = require("./middleware/error-handler")

// middleware
app.use(express.json())
app.use(express.static("./public"))
app.use(fileUpload())
// routes

app.get("/", (req, res) => {
  res.send('<h1>User Data API </h1><a href="/api/v1/users">User Routes</a>')
})

app.use("/api/v1/users", userRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server is listening port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
