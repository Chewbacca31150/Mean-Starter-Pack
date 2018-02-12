import { connect } from 'mongoose';
import { RepositoryBase } from "../utils/repository.base";
import { IUser } from "../models/user.interface";
import { UserSchema } from "../schemas/user.schema";
import { Injectable } from '@decorators/di';

@Injectable()
export class UserRepository extends RepositoryBase<IUser> {
    constructor() {
        super(UserSchema);
    }
}

Object.seal(UserRepository);
