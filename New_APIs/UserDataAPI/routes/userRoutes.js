const express = require("express")
const router = express.Router()

const {
  getAllUsers,
  getSingleUser,
  deleteUser,
  postUser,
  updateUser,
} = require("../controllers/userController")

router.route("/").get(getAllUsers).post(postUser)
router.route("/:id").get(getSingleUser).delete(deleteUser).patch(updateUser)
module.exports = router
