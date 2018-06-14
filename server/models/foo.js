import mongoose, { Schema } from 'mongoose';

const fooSchema = new Schema({
  title: {
    type: String,
    required: true
  }
  // ...
});

export default mongoose.model('Foo', fooSchema);
