import { Schema, Document } from 'mongoose';

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export interface TokenModel extends Document {
  user: Schema.Types.ObjectId;
  token: string;
  expiresAt: Date;
  createdAt?: Date;
  revokedAt?: Date;
  replacedBy?: string;
}
