import { IUser } from "../models/user.interface";
import { Schema, model, Model } from "mongoose";

let schema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    if (this._doc) {
        let doc = <IUser>this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});

schema.index({ username: 1 });

export let UserSchema: Model<IUser> = model<IUser>('user', schema, 'users', true);