import mongoose from 'mongoose';

// const {Schema} = mongoose;
const Schema = mongoose.Schema;

// описать схему
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: String,
});

userSchema.index({ email: 1 }, { unique: true });

// скомпилируем модель User на основе схемы userSchema
export default mongoose.model('User', userSchema);
