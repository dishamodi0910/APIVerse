require("dotenv").config()

const connectDB = require("./db/connect")

const User = require("./models/User")

const jsonUser = require("./userData.json")

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await User.deleteMany()
    await User.create(jsonUser)
    console.log("Success")
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
start()
