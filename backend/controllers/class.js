const uri = "mongodb+srv://ehalim:hackathon@edblock.xvvenkb.mongodb.net/edblock?retryWrites=true&w=majority";
import mongoose from 'mongoose'
import User from './models/user.js'

mongoose.connect(uri)

const getClasses = async (req) => {
  
}