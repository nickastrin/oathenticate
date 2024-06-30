import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { Schema, Model, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SALT_WORK_FACTOR = 10;

export interface UserModel extends Document {
  email: string;
  password: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new Schema<UserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  // Hashing should only occur if the password has been changed.
  if (this.isModified('password') || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);

      next();
    } catch (error) {
      return next(error as Error);
    }
  }

  return next();
});

// Compare candidate hash with saved hash.
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.plugin(uniqueValidator); // Validator for unique fields.

const User: Model<UserModel> = mongoose.model<UserModel>('User', userSchema); // Create the model.

export default User;
