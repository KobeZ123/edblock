import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  classes:[],
});

const User = model('User', userSchema);
export default User;