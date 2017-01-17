import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postsSchema = new mongoose.Schema({
  content: String,
  user: {
    type: Schema.ObjectId,
    ref: 'users',
  },
});

mongoose.model('posts', postsSchema);
