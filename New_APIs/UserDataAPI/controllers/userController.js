const User = require("../models/User")
const CustomError = require("../errors/index")

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res.status(200).json({ users, count: users.length })
}

const getSingleUser = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOne({ _id: userId })
  if (!user) {
    throw new CustomError.NotFoundError(`No user found with the id ${userId}`)
  }
  res.status(200).json({ user })
}

const postUser = async (req, res) => {
  const { firstName, lastName, gender, address, timeZone } = req.body
  if ((!firstName, !lastName, !address)) {
    throw new CustomError.BadRequestError("Please provide valid values")
  }
  if (!["Male", "Female"].includes(gender)) {
    throw new CustomError.BadRequestError("Gender can only be male or female")
  }
  const imageAvatar = Math.ceil(Math.random() * 4)
  const image = `https://robohash.org/${firstName.split(" ").join("")}${address
    .split(" ")
    .join("")}${lastName
    .split(" ")
    .join("")}.png?size=200x200&set=set${imageAvatar}`
  const user = await User.create({
    firstName,
    lastName,
    gender,
    address,
    timeZone,
    image,
  })
  res.status(201).json({ user })
}

const updateUser = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!user) {
    throw new CustomError.NotFoundError(`No user found with the id ${userId}`)
  }
  res.status(StatusCodes.OK).json({ user })
}

const deleteUser = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOne({ _id: userId })
  if (!user) {
    throw new CustomError.NotFoundError(`No user found with the id ${userId}`)
  }
  await user.remove()
  res.status(200).json({ msg: `Success! User Removed` })
}

module.exports = {
  getAllUsers,
  getSingleUser,
  deleteUser,
  postUser,
  updateUser,
}
