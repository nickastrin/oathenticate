import mongoose, { Document, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import User from '@models/user';

export interface TokenModel extends Document {
  user: Schema.Types.ObjectId;
  token: string;
  expiresAt: Date;
  createdAt?: Date;
  revokedAt?: Date;
  replacedBy?: string;
}

const tokenSchema = new Schema<TokenModel>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: User,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  revokedAt: Date,
  replacedBy: String,
});

tokenSchema.plugin(uniqueValidator);

export default mongoose.model<TokenModel>('token', tokenSchema);
