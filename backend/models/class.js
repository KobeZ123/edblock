import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const classSchema = new Schema({
  title: String,
  description: String
});

const Class = model('Class', classSchema);
export default Class;