import { Document, Types, Schema } from 'mongoose';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    createdAt: Date;
    modifiedAt: Date;
}