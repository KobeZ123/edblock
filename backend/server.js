const uri = "mongodb+srv://ehalim:hackathon@edblock.xvvenkb.mongodb.net/edblock?retryWrites=true&w=majority";
import mongoose from 'mongoose'
import User from './models/user.js'
import Class from './models/class.js'

mongoose.connect(uri)

const result = await Class.findOne({title: "Math101"})
console.log(result.description)