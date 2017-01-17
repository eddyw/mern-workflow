import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  name: String,
});

mongoose.model('users', usersSchema);
