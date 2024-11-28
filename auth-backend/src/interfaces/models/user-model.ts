import { Document } from 'mongoose';

export interface UserModel extends Document {
  email: string;
  password: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}
