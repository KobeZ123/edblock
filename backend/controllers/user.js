const uri = "mongodb+srv://ehalim:hackathon@edblock.xvvenkb.mongodb.net/edblock?retryWrites=true&w=majority";
import mongoose from 'mongoose'
import User from './models/user.js'

mongoose.connect(uri)

const createUser = async (req) => {
  /**
   * Required format:
   * - firstName
   * - lastName
   * - username
   * - password
   */
  const newUser = User.create({
    firstName: req.firstName,
    lastName: req.lastName,
    userName: req.userName,
    password: req.password,
    classes:[]
  })
  
  return {
    status: true,
    message: "User has been created",
    docs: newUser
  }
}

// getter method
const listClasses = async (req) => {
  const user = User.findOne({userName: userName})
  
  return {
    status: true,
    docs: user.classes
  }
}