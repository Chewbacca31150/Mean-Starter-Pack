import { Query, DocumentQuery, Document } from 'mongoose';

export interface IRead<T> {
    retrieve: (callback: (error: any, result: any) => void) => void;
    findById(id: string, props?: any, callback?: (error: any, result: T) => void): DocumentQuery<Document, Document>;
    findOne(cond?: Object, props?: any, callback?: (err: any, res: T) => void): DocumentQuery<Document, Document>//Query<T>;
    find(cond: Object, fields: Object, options: Object, callback?: (err: any, res: T[]) => void): DocumentQuery<Document[], Document>//Query<T[]>;
}